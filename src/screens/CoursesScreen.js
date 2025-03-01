import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const courses = [
  { name: "angular", id: 1 },
  { name: "html", id: 2 },
  { name: "js", id: 3 },
  { name: "python", id: 4 },
  { name: "java", id: 5 },
];

export default function CoursesScreen() {
   
  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.content}>{item.name}</Text>;
      }}
    />
  )
}

const styles = StyleSheet.create({
  content:{
    fontSize:20,
    color:"white",
    backgroundColor:"black",
    marginVertical:10,
    padding:20,
  }
})