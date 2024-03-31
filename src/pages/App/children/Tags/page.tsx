import { ChangeEvent, FC, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { fetchTags } from "../../../../api/tags.api";
import { Button, TextField } from "@mui/material";
import styles from "./component.module.css";

const TagsPage: FC = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const {
    data: tags,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchTags({ page, limit, order: "asc", sortBy: "name" }),
    queryKey: ["tags", { page, limit }],
  });

  const changePage = (page: number) => {
    setPage(page);
    queryClient.invalidateQueries("tags");
  };

  const tagsData = useMemo(() => tags?.items, [tags]);
  const hasNewPage = useMemo(() => tags?.hasNextPage, [tags]);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["settings"]}>
        <TextField
          type="number"
          label="Per page:"
          value={limit}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // Input type number will let only number values
            setLimit(Number(e.target.value));
          }}
        />
      </div>
      {isLoading && <div>Is loading...</div>}
      {isError && <div>Is error...</div>}
      {!isLoading && !isError && (
        <div className={styles["content"]}>
          {tagsData?.map((tag, index) => (
            <p key={index}>{JSON.stringify(tag)}</p>
          ))}
        </div>
      )}
      <div className={styles["pagination"]}>
        <Button
          variant="contained"
          disabled={page == 1}
          onClick={() => changePage(page - 1)}
        >
          Previous page
        </Button>
        <Button
          variant="contained"
          disabled={!hasNewPage}
          onClick={() => changePage(page + 1)}
        >
          Next page
        </Button>
      </div>
    </div>
  );
};

export default TagsPage;
