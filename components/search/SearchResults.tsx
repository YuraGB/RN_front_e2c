import { TProduct } from "@/types/product";
import { FlatList, Text } from "react-native";
import ProductCard from "../productCard";

export const SearchResults = ({
  data,
  onClosePopup,
}: {
  data?: TProduct[];
  onClosePopup: () => void;
}) => {
  if (!data) {
    return (
      <Text className="font-bold text-lg text-gray-400">Search results</Text>
    );
  }

  return (
    <FlatList
      data={data}
      style={{
        maxHeight: 450,
      }}
      renderItem={({ item }) => (
        <ProductCard
          key={item.id}
          {...{ ...item, id: item.id.toString() }}
          height={400}
          minHeight={400}
          callback={onClosePopup}
        />
      )}
    />
  );
};
