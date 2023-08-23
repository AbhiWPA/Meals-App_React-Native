import { Pressable, View, Text, StyleSheet } from "react-native";


const CategoryGridTile = ({title, color}) => {

    return <View style={styles.gridItem}>
        <Pressable>
            <View>
                <Text>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View> 
}

const styles=StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 8,
        elevation: 4
    }
});

export default CategoryGridTile;