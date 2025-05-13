import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import ProductCard from "@/components/productCard";
import { useGetCategoryByNameQuery } from "@/store/category/categoryApi";
import { TProduct } from "@/types/product";
import { useLocalSearchParams } from "expo-router";
import { lazy, Suspense } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
const Footer = lazy(() => import("@/components/footer"));

export default function Category() {
  const { name: categoryName } = useLocalSearchParams() as { name?: string };
  const { data } = useGetCategoryByNameQuery({ name: categoryName });
  const { width } = useWindowDimensions();
  const numColumns = width > 0 ? 2 : 1;

  if (!categoryName?.length || !data?.products) {
    return (
      <PageTitle
        title={
          <Text className="font-bold text-2xl">Category has no products</Text>
        }
      />
    );
  }

  const titleCapitilized = categoryName
    ? categoryName[0].toUpperCase() + categoryName.slice(1)
    : "Unknown Category";

  return (
    <FlatList
      data={data.products}
      numColumns={2}
      key={numColumns}
      ListHeaderComponent={
        <View className="pt-16">
          <Header />
          <PageTitle
            title={
              <Text className="font-bold text-2xl">
                Category {titleCapitilized}
              </Text>
            }
          />
        </View>
      }
      ListFooterComponent={
        <Suspense>
          <Footer />
        </Suspense>
      }
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }: { item: TProduct }) => (
        <TouchableOpacity className="w-1/2 p-0">
          <ProductCard
            {...item}
            id={item.id.toString()}
            borderRadius={0}
            width={"100%"}
          />
        </TouchableOpacity>
      )}
    />
  );
}
