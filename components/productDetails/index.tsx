import { ReactNode } from "react";
import { TProduct } from "@/types/product";
import { YStack } from "tamagui";
import { ProductImage } from "@/components/productDetails/components/ProductImage";
import { ProductInfo } from "@/components/productDetails/components/ProductInfo";

export const ProductDetails = ({
  product,
}: {
  product: TProduct;
}): ReactNode => {
  return (
    <YStack paddingBottom={70}>
      <ProductImage imageUrl={product.images[0]} />
      <ProductInfo product={product} />
    </YStack>
  );
};
