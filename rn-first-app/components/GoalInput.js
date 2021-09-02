import React, { useState } from "react";
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/styles";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const setGoalState = (inputText) => {
    setEnteredGoal(inputText);
  };

  const onAdd = () => {
    props.onGoalAdd(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visibility} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setGoalState}
          placeholder="Song name"
          style={styles.input}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Button
              color="#EC407A"
              title="Add"
              onPress={onAdd}
              type="outline" //bind does not immediately call the fun but passes prop
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Button
              color="#F48FB1"
              title="Cancel"
              onPress={props.setVisibility.bind(this, false)} //bind does not immediately call the fun but passes prop
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
