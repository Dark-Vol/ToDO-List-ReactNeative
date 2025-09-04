import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

export default function ListItem({ task, deleteHeandler }) {
  return (
    <TouchableHighlight 
      style={styles.button} 
      onPress={() => deleteHeandler(task.id)}
    >
      <Text style={styles.buttonText}>{task.task}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000080',
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "red",
        fontStyle: "italic",
        textAlign: "center",
    }
});
