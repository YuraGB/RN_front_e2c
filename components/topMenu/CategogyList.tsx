import { Link } from "expo-router";
import { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const CategoryList = ({
  list,
  onCloseDialog,
}: {
  list: string[];
  onCloseDialog: () => void;
}): ReactNode | null => {
  if (!list || list.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={list}
      keyExtractor={(item, index) => `${item}-${index}`}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity className='w-1/2'>
          <Link
            href={{ pathname: "/category/[name]", params: { name: item } }}
            className='p-2 border border-gray-200'
            onPress={() => {
              console.log("press", onCloseDialog);
              onCloseDialog();
            }}
          >
            <Text className='text-lg'>{item}</Text>
          </Link>
        </TouchableOpacity>
      )}
      columnWrapperStyle={{
        display: "flex",
      }}
    />
  );
};

export default CategoryList;
