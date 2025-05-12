import { AntDesign } from "@expo/vector-icons";
import { Button, View } from "tamagui";
import MenuDialog from "@/components/DialogComponent";
import { useMenu } from "@/components/topMenu/useMenu";
import { Loader } from "@/components/Loader";
import { lazy, Suspense } from "react";

const CategoryList = lazy(() => import("./CategogyList"));

export function Menu() {
  const { categoryList, error, onCloseAction, visible, onPressAction } =
    useMenu();

  if (error || categoryList?.length === 0) {
    return null;
  }

  return (
    <View gap='$4' justifyContent='center' alignItems='center'>
      <MenuDialog
        visible={visible}
        onClose={onCloseAction}
        buttonTrigger={
          <Button
            onPress={onPressAction}
            icon={<AntDesign name={"menu-fold"} />}
          >
            Categories
          </Button>
        }
        dialogTitle={"The Category list"}
      >
        <Suspense fallback={<Loader />}>
          <CategoryList list={categoryList} onCloseDialog={onCloseAction} />
        </Suspense>
      </MenuDialog>
    </View>
  );
}
