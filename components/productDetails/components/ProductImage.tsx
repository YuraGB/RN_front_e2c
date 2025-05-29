import { ReactNode } from "react";
import { Image, View } from "react-native";
import { Separator } from "tamagui";

export const ProductImage = ({ imageUrl }: { imageUrl: string }): ReactNode => {
  return (
    <View className="w-full h-[400px] mb-2">
      <Image
        width={300}
        height={500}
        className="h-full"
        source={{
          uri: imageUrl,
          cache: "only-if-cached",
        }}
      />
      <Separator margin={20} />
    </View>
  );
};
