import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress, type, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === 'white' ? styles.whiteBg : {}]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
export default React.memo(Button);
