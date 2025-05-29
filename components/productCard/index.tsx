import { TProduct } from "@/types/product";
import { useRouter } from "expo-router";
import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { Button, Card, H4, Image, Paragraph, Text, XStack } from "tamagui";
import type { CardProps } from "tamagui";
import { useAddToCard } from "../../hooks/addToCard/useAddToCard";

// CardProps have conflict with id field as number
type ProductCardProps = CardProps &
  Partial<Omit<TProduct, "id">> & { id: string | number } & {
    callback?: () => void;
  };

const ProductCard = (props: ProductCardProps): ReactNode => {
  const router = useRouter();
  const { handleAddToBasket } = useAddToCard(
    Number(props.id),
    Number(props.price),
  );

  const onTouchHendler = () => {
    router.push(`/product/${props.id}`);
    if (props.callback) {
      props.callback();
    }
  };

  return (
    <TouchableOpacity onPress={onTouchHendler}>
      <Card elevate size="$10" bordered {...props}>
        <Card.Header padded={true} paddingLeft={20} paddingRight={10}>
          <H4 className="font-bold" fontWeight={"900"} color={"$accent10"}>
            {props.title}
          </H4>
          <Paragraph theme="dark" color={"$accent10"}>
            Now available
          </Paragraph>
        </Card.Header>
        <Card.Footer padded={true}>
          <XStack gap="$2" className="mr-[auto]">
            <Text fontSize="$4" fontWeight="bold">
              ${props.price}
            </Text>
          </XStack>
          <XStack flex={1} />
          <Button
            bordered={true}
            radiused={true}
            className="ml-[400xp] relative z-1"
            onPress={handleAddToBasket}
          >
            Purchase
          </Button>
        </Card.Footer>
        <Card.Background>
          <Image
            maxWidth={"90%"}
            maxHeight={"90%"}
            resizeMethod="auto"
            margin={"auto"}
            source={{
              width: 300,
              height: 300,
              uri: props.thumbnail,
            }}
            onError={({ nativeEvent: { error } }) => console.log(error)}
          />
        </Card.Background>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductCard;
