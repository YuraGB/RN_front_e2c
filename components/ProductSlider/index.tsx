import { TProductSliderQuery, useProductSlider } from "./useProductSlider";
import type { ReactNode } from "react";

import Slider from "@/components/Carousel";
import { Loader } from "../Loader";

const ProductSlider = (props: TProductSliderQuery): ReactNode | null => {
  const { products, error, isLoading } = useProductSlider(props);

  if (isLoading) {
    return <Loader />;
  }

  if (error || products?.length === 0) {
    return null;
  }

  return <Slider slides={products} />;
};

export default ProductSlider;
