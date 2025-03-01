import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const courses = [
    { name: "js", id: 1 },
    { name: "html", id: 2 },
    { name: "angular", id: 3 },
    { name: "python", id: 4 },
    { name: "java", id: 5 },
  ];
  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.content}>{item.name}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
content:{
  fontSize:20,
  color:"white",
  backgroundColor:"black",
  marginVertical:10,
  padding:20,
}
});
