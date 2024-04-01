type FetchTagsArgs = {
  page: number;
  perPage: number;
  order: "asc" | "desc";
  sortBy: "popular" | "name";
};

type TagData = {
  name: string;
  count: number;
};

type FetchTagsResponse = {
  items: Array<TagData>;
  hasNextPage: boolean;
};

// This should go to ENV variables
const apiUrl = "https://api.stackexchange.com/2.3/";

const fetchTags = async ({
  page,
  perPage: pageSize,
  order,
  sortBy,
}: FetchTagsArgs): Promise<FetchTagsResponse> => {
  const response = await fetch(
    `${apiUrl}tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sortBy}&site=stackoverflow`
  );
  const data = (await response.json()) as {
    items: Array<TagData & Record<string, unknown>>;
    has_more: boolean;
  };

  return {
    items: data.items.map((item) => ({ name: item.name, count: item.count })),
    hasNextPage: data.has_more,
  };
};

export { fetchTags };
