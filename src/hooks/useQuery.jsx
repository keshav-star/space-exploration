import { useEffect, useState } from "react";
import { message } from "antd";

const useQuery = (apiFunction, { onSuccess, onError } = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);

  const [reload, setReload] = useState(0);

  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      reload > 0 && setIsRefetching(true);
      setIsError(false);
      setError("");
      try {
        setIsLoading(true)
        const res = await apiFunction();
        setData(res);
        setIsLoading(false)
        if (onSuccess) {
          onSuccess(res);
        }
        return res;
      } catch (error) {
        setIsLoading(false)
        setIsError(true);
        setError(error);
        message.error(error?.message || error?.response?.data?.message);
        if (onError) {
          onError(error);
        }
        return error;
      } finally {
        setIsLoading(false);
        setIsRefetching(false);
      }
    };
    fetchData();
  }, [reload]);

  return { data, isLoading, isError, error, refetch, isRefetching };
};

export default useQuery;
