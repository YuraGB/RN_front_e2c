import { useGetPostsQuery } from "@/store/postsApi";

export const usePosts = ({ query }: { query?: string }) => {
  const { data, isLoading, error } = useGetPostsQuery(query);
  return {
    posts: data ? data : [],
    isLoading,
    error,
  };
};
