import { useGetProductsQuery } from "@/store/product/productsApi";

export type TProductSliderQuery = { query: string };

export const useProductSlider = ({ query }: { query: string }) => {
  const { data, error, isLoading } = useGetProductsQuery(query);

  return {
    products: data ? data : [],
    error,
    isLoading,
  };
};
