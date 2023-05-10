import clsx from "clsx";
import { Form } from "react-bootstrap";
import styles from "./FormControl.module.scss";

const FormControl = ({
  isSubmitted = false,
  error = undefined,
  label = undefined,
  register,
  ...props
}) => {
  const isError = isSubmitted && !!error;

  return (
    <>
      {!!label && <Form.Label>{label}</Form.Label>}

      <Form.Control
        className={
          isSubmitted
            ? styles[`control--${isError ? "invalid" : "valid"}`]
            : null
        }
        {...register}
        {...props}
      />

      <Form.Control.Feedback
        type="invalid"
        className={clsx(
          "d-block",
          isSubmitted ? (isError ? "visible" : "invisible") : null
        )}
      >
        {error}
      </Form.Control.Feedback>
    </>
  );
};

export default FormControl;
