import { ReactNode } from "react";
import { View } from "react-native";

export const PageTitle = ({
  title,
}: {
  title: string | ReactNode;
}): ReactNode => {
  return (
    <View className='font-black p-10 flex items-center text-[20px]'>
      {title}
    </View>
  );
};
