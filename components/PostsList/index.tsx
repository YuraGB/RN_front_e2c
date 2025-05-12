import { ReactNode } from "react";
import MasonryList from "reanimated-masonry-list";
import { usePosts } from "./usePosts";
import { Loader } from "@/components/Loader";
import { PostCard } from "./PostCard";
import { TPost } from "@/types/post";
import { View } from "tamagui";

export const PostsList = ({ query }: { query?: string }): ReactNode => {
  const { posts, error, isLoading } = usePosts({ query });

  if (isLoading) {
    return <Loader />;
  }

  if (error || posts?.length === 0) {
    return null;
  }

  return (
    <View>
      <MasonryList
        data={posts}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        renderItem={({ item }) => <PostCard post={item as TPost} />}
        refreshing={isLoading}
        style={{
          paddingBottom: 50,
        }}
      />
    </View>
  );
};
