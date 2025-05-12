import { TProduct } from "@/types/product";
import { ReactNode } from "react";
import { Button, Card, H4, Image, Paragraph, Text, XStack } from "tamagui";
import type { CardProps } from "tamagui";

// CardProps have conflict with id field as number
type ProductCardProps = CardProps &
  Partial<Omit<TProduct, "id">> & { id: string | number };

const ProductCard = (props: ProductCardProps): ReactNode => {
  return (
    <Card elevate size='$10' bordered {...props}>
      <Card.Header padded={true} paddingLeft={20} paddingRight={10}>
        <H4 className='font-bold' fontWeight={"900"} color={"$accent10"}>
          {props.title}
        </H4>
        <Paragraph theme='dark' color={"$accent10"}>
          Now available
        </Paragraph>
      </Card.Header>
      <Card.Footer padded={true}>
        <XStack gap='$2' className='mr-[auto]'>
          <Text fontSize='$4' fontWeight='bold'>
            ${props.price}
          </Text>
        </XStack>
        <XStack flex={1} />
        <Button bordered={true} radiused={true} className='ml-[400xp]'>
          Purchase
        </Button>
      </Card.Footer>
      <Card.Background>
        <Image
          maxWidth={"90%"}
          maxHeight={"90%"}
          resizeMethod='auto'
          margin={"auto"}
          source={{
            width: 300,
            height: 300,
            uri: props.thumbnail,
          }}
          onError={({ nativeEvent: { error } }) =>
            console.log(props.thumbnail, 40)
          }
        />
      </Card.Background>
    </Card>
  );
};

export default ProductCard;
