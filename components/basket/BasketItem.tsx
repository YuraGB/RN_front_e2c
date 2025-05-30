import { useAppSelector } from "@/store/hooks";
import { TProductBasket } from "@/types/basket";
import { TouchableOpacity } from "react-native";
import { Image, Text, XStack, YGroup } from "tamagui";

export const BasketItem = ({ item }: { item: TProductBasket }) => {
  const basketCounter = useAppSelector((state) => state.basket.items);

  return (
    <TouchableOpacity onPress={() => console.log(item)}>
      <XStack
        justifyContent="space-between"
        alignItems="center"
        padding={10}
        borderBottomWidth={1}
        borderBottomColor="#ccc"
      >
        <Image
          source={{ uri: item.thumbnail }}
          alt={item.title}
          width={50}
          height={50}
        />
        <Text
          margin={"auto"}
          fontSize={14}
          fontWeight="bold"
          padding={5}
          maxWidth={200}
          width={150}
          display="flex"
        >
          {item.title}
        </Text>
        <YGroup gap={5} marginLeft={10} marginRight={10}>
          <Text fontSize={10} fontWeight="bold" borderBlockColor={"#000"}>
            Qt. {basketCounter[item.id]?.quantity || 1}
          </Text>
          <Text fontSize={14} color="#888">
            {item.price}
          </Text>
        </YGroup>

        <YGroup>
          <Text fontSize={12} fontWeight="bold" borderBlockColor={"#000"}>
            Summary
          </Text>
          <Text fontSize={14} color="#888">
            {item.price * (basketCounter[item.id]?.quantity || 1)}
          </Text>
        </YGroup>
      </XStack>
    </TouchableOpacity>
  );
};
