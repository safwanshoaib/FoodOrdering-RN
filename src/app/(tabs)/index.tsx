import { FlatList } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@/components/ProductListItem";

export default function TabOneScreen() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerStyle={{ gap: 8, padding: 8 }}
      columnWrapperStyle={{ gap: 8 }}
      renderItem={({ item, index }) => <ProductListItem product={item} />}
    />
  );
}
