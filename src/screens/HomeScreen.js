import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Courses"
        onPress={() => navigation.navigate("Courses")}
      />
      <Button
        title="Go to Courses Information"
        onPress={() => navigation.navigate("CoursesInformation")}
      />
      <Button
        title="Counter App"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Box App"
        onPress={() => navigation.navigate("Box App")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
