import { TProduct } from "@/types/product";
import { ReactNode } from "react";
import { View } from "react-native";
import { H3, Paragraph, Separator, YGroup } from "tamagui";

export const ProductInfo = ({ product }: { product: TProduct }): ReactNode => {
  return (
    <View className="p-2">
      <H3>{product.title}</H3>
      <Separator margin={"$4"} />
      <Paragraph color={"grey"}>{product.sku}</Paragraph>
      <Paragraph>{product.description}</Paragraph>
      <Separator margin={"$4"} />
      <Paragraph>{product.description}</Paragraph>
    </View>
  );
};
