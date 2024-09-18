import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await fetchFn();
        setData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch Data" });
        setData(initialValue);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [fetchFn]);

  return { isLoading, data, error, setData };
}
