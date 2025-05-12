import ScrollViewComponentBase from "@/components/ScrollViewComponent";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollViewComponentBase>
      <Text>Details of user {id} </Text>
    </ScrollViewComponentBase>
  );
}
