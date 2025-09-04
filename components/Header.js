import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>ToDo list</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        height: 100,
        paddingTop: 70,
        backgroundColor: '#000080',
    },
    text: {
        fontSize: 24,
        color: "red",
        fontStyle: "italic",
        textAlign: "center",
    }
});
