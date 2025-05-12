import * as React from "react";
import { View } from "react-native";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import ProductCard from "./productCard";
import { TProduct } from "@/types/product";

function Slider<T extends TProduct>({
  slides,
}: {
  slides: T[];
}): React.ReactNode {
  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <View id='carousel-component' className='flex flex-col'>
      <Carousel
        ref={ref}
        autoPlayInterval={2000}
        data={slides}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={430 * 0.75}
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 40,
          width: "100%",
          height: 500,
        }}
        mode={"parallax"}
        modeConfig={{
          parallaxAdjacentItemScale: 0.5,
        }}
        customConfig={() => ({ type: "positive", viewCount: 5 })}
        renderItem={({ item }) => (
          <ProductCard
            {...{ ...item, id: item.id.toString() }}
            height={400}
            minHeight={400}
          />
        )}
      />
    </View>
  );
}

export default Slider;
