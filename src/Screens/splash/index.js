import React, { useEffect } from 'react';
import {View, Text, Image, StatusBar, SafeAreaView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; 

const SplashScreen = () => {
    const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Login');  // Navigate to the login screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timeout);  // Clear timeout if the component unmounts
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar to set the background color and content color */}
      <StatusBar backgroundColor="#F7572C" barStyle="light-content" />
      
      {/* Icon */}
      <Image
        source={require('../../../assets/splash-icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      
      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>FOOD GRAB</Text>
      </View>
       {/* Home Indicator at the bottom */}
       <Image
        source={require('../../../assets/Home Indicator.png')} // Path to your home indicator
        style={styles.homeIndicator}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
