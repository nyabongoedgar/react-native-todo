import React from "react";
import { View, Button, TextInput } from "react-native";

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <View style={styles.formStyle}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
      />

      <Button
        style={styles.submitButton}
        type="submit"
        text="Add Todo"
        onClick={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: "4px",
    height: "28px",
    width: "100%",
  },

  formStyle: {
    display: "flex",
  },
  submitButton: {
    borderRadius: "4px",
    width: "174px",
    height: "35px",
    background: "#ceff1a",
    color: "#000000",
  },
});

export default FormTodo;
