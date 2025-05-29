import { ProductDetails } from "@/components/productDetails";
import ScrollViewComponentBase from "@/components/ScrollViewComponent";
import { useGetProductByIdQuery } from "@/store/product/productsApi";
import { TProduct } from "@/types/product";
import { useLocalSearchParams } from "expo-router";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const { data } = useGetProductByIdQuery(id as string);

  if (!data) {
    return null;
  }
  return (
    <ScrollViewComponentBase>
      <ProductDetails product={data as TProduct} />
    </ScrollViewComponentBase>
  );
}
