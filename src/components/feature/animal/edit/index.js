import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNewAnimal, useUpdateFields } from "../hooks";
import formStyles from "./styles";

const Animal = ({ disabled = false }) => {
  const styles = formStyles();
  const { fields, setFormField } = useUpdateFields();
  const { onSubmit } = useNewAnimal();

  console.log(setFormField);

  const { common_name, scientific_name } = fields;

  return (
    <View style={styles.container}>
      <View style={styles.form}></View>

      <TextInput
        key={"common_name"}
        placeholder="Common Name"
        value={common_name}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={(v) => setFormField("common_name", v)}
      />

      <View style={{ height: 15, width: "100%" }}></View>

      <TextInput
        key={"scientific_name"}
        placeholder="Scientific Name"
        value={scientific_name}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={(v) => setFormField("scientific_name", v)}
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animal;
