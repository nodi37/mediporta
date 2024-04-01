import { Button } from "@mui/material";
import { FC } from "react";
import styles from "./component.module.css";
import { useSearchParams } from "react-router-dom";
import useUpadateParam from "@/hooks/use-update-param.hook";

type PaginationProps = {
  hasNextPage: boolean;
};

const Pagination: FC<PaginationProps> = (props) => {
  const { hasNextPage } = props;
  const [searchParams] = useSearchParams();
  const { updateParam } = useUpadateParam();
  const currentPage = Number(searchParams.get("page") ?? 1);
  const hasPreviousPage = currentPage > 1;
  const updatePage = (toNextPage?: boolean) => {
    const queryValue = Number(searchParams.get("page") ?? 1);
    const currPage = !isNaN(queryValue) ? queryValue : 1;
    const nextPage = toNextPage ? currPage + 1 : currPage - 1;
    updateParam("page", nextPage.toString());
  };

  return (
    <div className={styles["pagination"]}>
      <Button
        onClick={() => updatePage()}
        variant="contained"
        disabled={!hasPreviousPage}
      >
        Back
      </Button>
      <span>{currentPage}</span>
      <Button
        onClick={() => updatePage(true)}
        variant="contained"
        disabled={!hasNextPage}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
