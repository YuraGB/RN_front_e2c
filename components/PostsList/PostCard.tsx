import { TPost } from "@/types/post";
import { getRandomColor } from "@/utils/getRandomColor";
import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { Card, H4, Paragraph, View } from "tamagui";

export const PostCard = ({ post }: { post: TPost }): ReactNode => {
  const bgColor = getRandomColor();

  return (
    <TouchableOpacity className='w-full'>
      <Card
        bordered
        radiused={false}
        style={{
          backgroundColor: bgColor,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomEndRadius: 0,
          borderBottomStartRadius: 0,
        }}
      >
        <Card.Header padded padding={20}>
          <H4
            className='font-bold'
            fontWeight={"900"}
            fontSize={20}
            lineHeight={22}
            color={"$accent10"}
          >
            {post.title}
          </H4>
        </Card.Header>
        <View>
          <Paragraph padding={20} zIndex={1} lineHeight={20}>
            {post.body}
          </Paragraph>
        </View>
        <Card.Background
          className='bg-red'
          style={{
            background: bgColor,
            zIndex: 0,
          }}
          background={bgColor}
          zIndex={1}
        >
          <View className='bg-red flex w-full h-full z-10 relative'></View>
        </Card.Background>
      </Card>
    </TouchableOpacity>
  );
};
