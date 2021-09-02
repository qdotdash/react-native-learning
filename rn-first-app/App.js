import React, { useState } from "react";
import { StyleSheet, View, Button, TouchableOpacity } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import styles from "./styles/styles"

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const buttonClickHandler = (enteredGoal) => {
    if(enteredGoal.length === 0)
      return;
      
    setGoalList((goalList) => [
      ...goalList,
      { id: Math.random().toString(), goal: enteredGoal },
    ]);
  };

  const deleteGoalItem = (propItem) => {
    console.log("Going to delete : ", propItem);
    console.log(goalList);
    setGoalList(() => {
      return goalList.filter((item) => {
        if (propItem.id !== item.id) return true;
        else return false;
      });
    });
  };
  console.log(goalList);
  // console.log(goalList);

  return (
    <View style={styles.screen}>
      <TouchableOpacity>
        <Button
        color="#EC407A"
          title="Add Goals"
          onPress={() => {
            setModalVisibility(true); //make modal visible on pressing add
          }}
        />
      </TouchableOpacity>
      <GoalInput onGoalAdd={buttonClickHandler} visibility={modalVisibility} setVisibility={setModalVisibility}/>
      <GoalList deleteHandler={deleteGoalItem} listItem={goalList} />
    </View>
  );
}


