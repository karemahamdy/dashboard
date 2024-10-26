import { useQuery } from "@tanstack/react-query";
import { deleteCabins } from "../../services/apiCabins";

export function deleteCabin() {
  const {
    isLoading,
    data: Cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: deleteCabins,
  });

  return { isLoading, error, Cabins };
}
