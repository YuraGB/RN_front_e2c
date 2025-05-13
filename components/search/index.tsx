import DialogInstance from "@/components/DialogComponent";
import { SearchButtonTrigger } from "@/components/search/SearchButtonTrigger";
import { useSearch } from "./useSearch";
import SearchForm from "./searchForm";

export const Search = () => {
  const {
    onCloseAction,
    onPressAction,
    visible,
    onChangeHandler,
    searchResults,
  } = useSearch();

  return (
    <DialogInstance
      dialogTitle={"Search"}
      buttonTrigger={<SearchButtonTrigger triggerAction={onPressAction} />}
      visible={visible}
      onClose={onCloseAction}
    >
      <SearchForm
        onClose={onCloseAction}
        onChangeHandler={onChangeHandler}
        searchResults={searchResults}
      />
    </DialogInstance>
  );
};
