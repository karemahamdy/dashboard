import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useAddCabins() {
  const {
    isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, error, Cabins: data };
}
