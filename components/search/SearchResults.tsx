import { TProduct } from "@/types/product";
import { Text, View } from "react-native";
import ProductCard from "../productCard";

export const SearchResults = ({ data }: { data?: TProduct[] }) => {
  if (!data) {
    return (
      <Text className="font-bold text-lg text-gray-400">Search results</Text>
    );
  }

  return (
    <View className="grid grid-cols-2">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          {...{ ...item, id: item.id.toString() }}
          height={400}
          minHeight={400}
        />
      ))}
    </View>
  );
};
