import { StyleSheet } from "react-native";
import CoursesScreen from "./src/screens/CoursesScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CoursesInformationScreen from "./src/screens/CoursesInformationScreen";
import CounterScreen from "./src/screens/CounterScreen";
import BoxScreen from "./src/screens/BoxScreen";
import ColorChangeScreen from "./src/screens/ColorChangeScreen";
import PasswordScreen from "./src/screens/PasswordScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="CoursesInformation" component={CoursesInformationScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Box App" component={BoxScreen} />
        <Stack.Screen name="Change Color" component={ColorChangeScreen} />
        <Stack.Screen name="Password Screen" component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
