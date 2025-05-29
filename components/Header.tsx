import { Separator, View } from "tamagui";
import { Menu } from "@/components/topMenu";
import { Search } from "@/components/search";
import { Basket } from "@/components/basket";

export const Header = () => {
  return (
    <View>
      <Separator />
      <View justifyContent="space-around" padding={10} flexDirection={"row"}>
        <Search />
        <Menu />
        <Basket />
      </View>
      <Separator />
    </View>
  );
};
