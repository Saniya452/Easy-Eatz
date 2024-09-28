// components/SocialButton.js
import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles'; // Ensure the styles file is imported

const SocialButton = ({ iconSource, buttonText, onPress }) => {
  return (
    <TouchableOpacity style={styles.socialButton} onPress={onPress}>
      <Image source={iconSource} style={styles.socialIcon} />
      <Text style={styles.socialButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(SocialButton);
