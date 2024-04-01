import { FC, useEffect, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { fetchTags } from "@/api/tags.api";
import { useSearchParams } from "react-router-dom";
import styles from "./page.module.css";
import Pagination from "@/components/organisms/Pagination";
import NumberInput from "@/components/atoms/NumerInput";
import LoadingIndicator from "@/components/atoms/LoadingIndicator";
import ErrorMessage from "@/components/molecules/ErrorMessage";
import DataTable from "@/components/organisms/DataTable";
import SelectInput from "@/components/atoms/SelectInput";
import useUpadateParam from "@/hooks/use-update-param.hook";

const TagsPage: FC = () => {
  // Hooks
  const queryClient = useQueryClient();
  const { updateParam } = useUpadateParam();

  // useState
  const [isWaiting, setIsWaiting] = useState(false);
  const [searchParams] = useSearchParams();

  // State
  const page = Number(searchParams.get("page") ?? 1);
  const perPage = Number(searchParams.get("perPage") ?? 10);
  const sortBy = (searchParams.get("sortBy") ?? "name") as "name" | "popular";
  const order = (searchParams.get("order") ?? "asc") as "asc" | "desc";

  // Query
  const {
    data: tags,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchTags({ page, perPage, order, sortBy }),
    queryKey: ["tags", { page, perPage, sortBy, order }],
  });

  // Query refresh handler
  useEffect(() => {
    setIsWaiting(true);
    const timeoutId = setTimeout(() => {
      queryClient.invalidateQueries("tags");
      setIsWaiting(false);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchParams]);

  // Data computing
  const tagsData = useMemo(
    () =>
      tags?.items.map((tag) => ({
        title: tag.name,
        content: [tag.count.toString()],
      })),
    [tags]
  );
  const hasNextPage = useMemo(() => tags?.hasNextPage, [tags]);

  // Config
  const sortByOptions = [
    { title: "Name", value: "name" },
    { title: "Count", value: "popular" },
  ];
  const orderOptions = [
    { title: "Ascending", value: "asc" },
    { title: "Descending", value: "desc" },
  ];
  const dataTableTitleConfig = {
    main: "Tags",
    data: ["Count"],
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["settings"]}>
        <NumberInput
          positive
          value={perPage.toString()}
          defaultValue={10}
          label="Per page:"
          onChange={(value) => updateParam("perPage", value.toString())}
        />
        <div className={styles["sort-settings"]}>
          <SelectInput
            label="Sort by"
            value={sortBy}
            items={sortByOptions}
            onChange={(value) => {
              updateParam("sortBy", value);
            }}
          />
          <SelectInput
            label="Sort order"
            value={order}
            items={orderOptions}
            onChange={(value) => {
              updateParam("order", value);
            }}
          />
        </div>
      </div>
      {(isLoading || isWaiting) && <LoadingIndicator />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && !isWaiting && (
        <div className={styles["content"]}>
          <p style={{ marginBottom: 10 }}>
            {tagsData?.length ?? 0} results on this page
          </p>
          <DataTable title={dataTableTitleConfig} rows={tagsData ?? []} />
        </div>
      )}
      <Pagination hasNextPage={hasNextPage ?? false} />
    </div>
  );
};

export default TagsPage;
