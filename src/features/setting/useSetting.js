import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    data: Settings,
    error,
  } = useQuery({
    queryKey: ["Settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, Settings };
}
