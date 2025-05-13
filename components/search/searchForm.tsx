import { FontAwesome5 } from "@expo/vector-icons";
import { ReactNode } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Button, Fieldset, Input, Separator, YStack } from "tamagui";
import { SearchResults } from "./SearchResults";
import { TProduct } from "@/types/product";

const SearchForm = ({
  onClose,
  onChangeHandler,
  searchResults,
}: {
  onClose: () => void;
  searchResults?: TProduct[];
  onChangeHandler: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}): ReactNode => {
  return (
    <YStack>
      <Fieldset marginBottom={20}>
        <Input
          placeholder="Search term"
          width={"100%"}
          aria-label="Search input"
          onChange={onChangeHandler}
        />
      </Fieldset>
      <Separator marginBottom={20} />
      <Button icon={<FontAwesome5 name={"search"} />} marginBottom={20}>
        Find
      </Button>
      <SearchResults data={searchResults} />
    </YStack>
  );
};

export default SearchForm;
