import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfTasks, setListOfTasks] = React.useState([
    {id: 1, task: 'Buy milk'},
    {id: 2, task: 'Walk the dog'},
    {id: 3, task: 'Do homework'},
    {id: 4, task: 'Clean the house'},
  ]);

  const addHeandler = (text) =>{
    setListOfTasks(list => {
      return [
        {id: Math.random().toString(), task: text},
        ...list
      ]
    })
  }

  const deleteHeandler = (id) =>{
    setListOfTasks(list => {
      return list.filter(item => item.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <Form addHeandler={addHeandler} />
      <View >
        <FlatList
          data={listOfTasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem task={item} deleteHeandler={deleteHeandler}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // fontSize: 18, textDecorationLine: item.completed ? 'line-through' : 'none' 
});
