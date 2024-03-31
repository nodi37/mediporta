import { CircularProgress } from "@mui/material";
import { FC } from "react";

import styles from "./component.module.css";

const LoadingIndicator: FC = () => (
  <div className={styles["wrapper"]}>
    <CircularProgress />
  </div>
);

export default LoadingIndicator;
