import { useGetCategoryListQuery } from "@/store/categoryApi";
import { useState } from "react";

export const useMenu = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { data, isLoading, error } = useGetCategoryListQuery({});

  const onPressAction = () => {
    setVisible((st) => !st);
  };

  const onCloseAction = () => {
    setVisible(false);
  };

  return {
    onCloseAction,
    onPressAction,
    visible,
    categoryList: data,
    isLoading,
    error,
  };
};
