import { View, Text, StyleSheet } from "react-native";


const MealsOverViewScreen = () =>{

    return <View style={styles.container}>
        <Text>Meal Overview Screen</Text>
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsOverViewScreen;