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
      <Button title="Box App" onPress={() => navigation.navigate("Box App")} />
      <Button
        title="Change Color"
        onPress={() => navigation.navigate("Change Color")}
      />
            <Button
        title="Password Screen"
        onPress={() => navigation.navigate("Password Screen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
