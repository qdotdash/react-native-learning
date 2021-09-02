import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    marginTop: 20,
    justifyContent: "center",
  },
  listItem: {
    backgroundColor: "#FFEBEE",
    marginTop: 10,
    padding: 10,
  },
  button: {
    width: "50%",
    marginHorizontal: 10,
  },
});

export default styles;
