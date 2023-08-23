import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


const MealsOverViewScreen = ({route}) =>{

    const {categoryId} = route.params;

    const displayMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0);

    const renderMealsItem = (itemData) => {
        return <MealItem title={itemData.item.title}/>
    }

    return <View style={styles.container}>
        <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealsItem}></FlatList>
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsOverViewScreen;