import { useDialogState } from "@/hooks/useDialogState";
import { useGetCategoryListQuery } from "@/store/category/categoryApi";

export const useMenu = () => {
  const { data, isLoading, error } = useGetCategoryListQuery({});

  return {
    categoryList: data,
    isLoading,
    error,
    ...useDialogState(),
  };
};
