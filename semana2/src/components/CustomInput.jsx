import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "../styles/pokemonStyle";

const CustomInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888"
        autoCapitalize="none"
      />
    </View>
  );
};

export default CustomInput;