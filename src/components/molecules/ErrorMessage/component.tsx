import { FC } from "react";
import styles from "./component.module.css";

const ErrorMessage: FC = () => (
  <div className={styles["wrapper"]}>
    <h1>We are sorry </h1>
    <p>Something went wrong, please try again later.</p>
  </div>
);

export default ErrorMessage;
