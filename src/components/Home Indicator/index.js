import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const HomeIndicator = () => {
  return (
    <Image
      source={require("../../../assets/Home Indicator (1).png")}
      style={styles.homeIndicator}
      resizeMode="contain"
    />
  );
};

export default React.memo(HomeIndicator);
