import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form({ addHeandler }) {
	const [text, setValue] = useState('');

  const onChangeText = (text) => {
    setValue(text);
  };

  const handleAddTask = () => {
    if (text.trim()) {
      addHeandler(text);
      setValue(''); // Очищаем поле ввода после добавления
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New task..."
        onChangeText={onChangeText}
        value={text}
      />
			<Button
				onPress={handleAddTask}
				title="Add Task"
				color="green"
			/>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
	},
	input: {
		borderBottomWidth: 1,
		padding: 10,
		borderColor: '#000080',
		width: '80%',
		textAlign: 'center',
		fontSize: 16,
	},
});
