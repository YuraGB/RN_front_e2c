import { PostsList } from "@/components/PostsList";
import ProductSlider from "@/components/ProductSlider";
import ScrollViewComponentBase from "@/components/ScrollViewComponent";
import { HP_PROD_SLIDER_QUERY } from "@/config/constants";

export default function Index() {
  return (
    <ScrollViewComponentBase>
      <ProductSlider query={HP_PROD_SLIDER_QUERY} />
      <PostsList />
    </ScrollViewComponentBase>
  );
}
