import { View } from "tamagui";
import { Menu } from "./topMenu";

export const Header = () => {
  return (
    <View justifyContent='space-between' padding={10}>
      <Menu />
    </View>
  );
};
