import React from "react";
import { TextInput } from "react-native";
import colors from "../../constants/colors";
import styles from "./styles";

const Input = ({ ...props }) => {
  return (
    <TextInput
      placeholderTextColor={colors.lightmidgrey}
      style={styles.input}
      {...props}
    />
  );
};
export default React.memo(Input);
placeholderTextColor="#999"
