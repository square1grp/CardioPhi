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
    email: yup
      .string()
      .email("Email is invalid.")
      .required("Email is required."),
    password: yup.string().required("Password is required."),
  })
  .required();

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "john@doe.com",
      password: "Abcdef1@#",
    },
  });

  const { signIn: onSubmit } = useAuth();

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col className="mt-5 pt-5" md={6} xl={3}>
          <h1 className="text-center mb-5">Sign In</h1>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <FormControl
                label="Email address"
                type="email"
                placeholder="Enter email"
                register={register("email")}
                isSubmitted={isSubmitted}
                error={_.get(errors, "email.message", undefined)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <FormControl
                label="Password"
                type="password"
                placeholder="Password"
                register={register("password")}
                isSubmitted={isSubmitted}
                error={_.get(errors, "password.message", undefined)}
              />
            </Form.Group>

            <Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                Sign In
              </Button>

              <p className="my-2 text-center">
                Not a member? <Link to={ROUTE.AUTH_SIGN_UP}>Sign Up</Link>
              </p>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
