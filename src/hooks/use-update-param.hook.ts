import { useSearchParams } from "react-router-dom";

const useUpadateParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParam = (key: string, value: string) => {
    searchParams.delete(key);
    searchParams.append(key, value);
    setSearchParams(searchParams);
  };

  return {
    updateParam,
  };
};

export default useUpadateParam;
