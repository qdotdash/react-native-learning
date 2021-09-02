import React from "react";
import styles from "../styles/styles";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


const GoalList = (props) => {
   
  return (
    <FlatList
      data={props.listItem}
      renderItem={(
        itemData //FlatList renders a special list item -> itemData(item, index, seperators)
      ) => (
        <TouchableOpacity onPress={props.deleteHandler.bind(this, itemData.item)}>
          <View style={styles.listItem}>
            <Text>{itemData.item.goal}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};


export default GoalList;
