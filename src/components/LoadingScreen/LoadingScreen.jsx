import Spinner from "react-bootstrap/Spinner";
import styles from "./LoadingScreen.module.scss";
import clsx from "clsx";
import { Fragment } from "react";

export const LoadingScreen = ({ show = false }) => {
  if (!show) return <Fragment />;

  return (
    <div className={clsx("min-vw-100 min-vh-100 fade d-flex align-items-center justify-content-center show", styles.loading)}>
      <Spinner className={styles.spinner} animation="border" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
