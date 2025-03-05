import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text>Şifrenizi Giriniz :</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="visible-password"
        onChangeText={(newValue) => setPassword(newValue)}
        value={password}
      />
      {password.length < 6 ? (
        <Text>Şifre en az 6 karakter olmalıdır.</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
});
