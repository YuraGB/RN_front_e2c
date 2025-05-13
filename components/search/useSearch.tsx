import { useDialogState } from "@/hooks/useDialogState";
import { useLazyGetSearchResaltsQuery } from "@/store/search/searchApi";
import { useEffect, useRef } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export const useSearch = () => {
  const [getSearchAction, { data, error, isLoading }] =
    useLazyGetSearchResaltsQuery();

  const timerRef = useRef<number>(null);

  const onChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (e.nativeEvent.text?.length > 3) {
        getSearchAction(e.nativeEvent.text);
      }
    }, 300);
  };

  // clear timer
  useEffect(() => {
    return () => {
      if (timerRef?.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return {
    ...useDialogState(),
    onChangeHandler,
    searchResults: data,
    isLoading,
    error,
  };
};
