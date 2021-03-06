import React from "react";
import { View, Button, Text } from "react-native";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <View style={style.todo}>
      <Text style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {`${index + 1}. ${todo.text}`}
      </Text>
      <View>
        <Button
          style={styles.successButton}
          variant="outline-success"
          onClick={() => markTodo(index)}
        >
          ✓
        </Button>{" "}
        <Button
          style={styles.removeButton}
          onClick={() => removeTodo(index)}
          text="✕"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  successButton: {
    background: "#a5ffd6",
    color: "#000000",
  },
  removeButton: {
    background: "#d44d5c",
    color: "#ffffff",
  },

  todo: {
    background: "#efd9ce",
    width: "100%",
    padding: "6px",
    color: "#000000",
    marginTop: "13px",
  },
});

export default Todo;
