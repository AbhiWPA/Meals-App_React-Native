import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data.js";

const CategoriesScreen = () => {
    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
}

export default CategoriesScreen;