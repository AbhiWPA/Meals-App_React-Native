import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


const MealsOverViewScreen = ({route}) =>{

    const {categoryId} = route.params;

    const displayMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0);

    const renderMealsItem = (itemData) => {

        const item = itemData.item;
        
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            complexity: item.complexity,
            affordability: item.affordability,
            duration: item.duration
        }

        return <MealItem {...mealItemProps}/>
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