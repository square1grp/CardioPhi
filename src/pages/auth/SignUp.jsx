import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ROUTE } from "utils";
import { FormControl } from "components";
import _ from "lodash";
import { useAuth } from "providers";

const schema = yup
  .object({
    firstName: yup.string().required("First Name is required."),
    lastName: yup.string().required("Last Name is required."),
    email: yup
      .string()
      .email("Email is invalid.")
      .required("Email is required."),
    password: yup
      .string()
      .required("Password is required")
      .matches(/^(?=.*[0-9])/, "Needs at least 1 number")
      .matches(
        /^(?=.*[\^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ])/,
        "Needs at least 1 special character"
      )
      .matches(/^(?=.*[a-z])/, "Needs at least 1 lowercase letter")
      .matches(/^(?=.*[A-Z])/, "Needs at least 1 uppercase letter")
      .min(8, "Must be at least 8 chars")
      .max(24, "Must be less than 256 chars"),
  })
  .required();

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john@doe.com",
      password: "Abcdef1@#",
    },
  });
  const { isLoading, signUp: onSubmit } = useAuth();

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col className="mt-5 pt-5" md={6} xl={3}>
          <h1 className="text-center mb-5">Sign Up</h1>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" as={Row}>
              <Col>
                <FormControl
                  label="First Name"
                  placeholder="John"
                  register={register("firstName")}
                  isSubmitted={isSubmitted}
                  error={_.get(errors, "firstName.message", undefined)}
                />
              </Col>

              <Col>
                <FormControl
                  label="Last Name"
                  placeholder="Doe"
                  register={register("lastName")}
                  isSubmitted={isSubmitted}
                  error={_.get(errors, "lastName.message", undefined)}
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3">
              <FormControl
                label="Email address"
                type="email"
                placeholder="john@doe.com"
                register={register("email")}
                isSubmitted={isSubmitted}
                error={_.get(errors, "email.message", undefined)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <FormControl
                label="Password"
                type="password"
                placeholder="**********"
                register={register("password")}
                isSubmitted={isSubmitted}
                error={_.get(errors, "password.message", undefined)}
              />
            </Form.Group>

            <Form.Group>
              <Button
                className="w-100"
                variant="primary"
                type="submit"
                disabled={isLoading}
              >
                Sign Up
              </Button>

              <p className="my-2 text-center">
                Have an account? <Link to={ROUTE.AUTH_SIGN_IN}>Sign In</Link>
              </p>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
