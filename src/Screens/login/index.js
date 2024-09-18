import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles"; // External CSS (styles.js)

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
            {/* <StatusBar backgroundColor="#F7572C" barStyle="light-content" /> */}
      {/* Status bar to make the top section match the background color */}
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>
        Welcome to Food Grab <Text style={styles.emoji}>👋 </Text>
      </Text>

      {/* Email Input Field */}
      <Text style={styles.text}>Email</Text>
      <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        // value="johndoe@gmail.com" // Default email value for the example
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input Field */}
      <Text style={styles.text} >Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        // value="Enter Password"  // Example password
        secureTextEntry
      />
      {/* Forgot Password Link */}
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("Tickets")} // Navigate to Tickets Screen
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* OR Section with Lines */}
      <View style={styles.orSection}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>
      {/* Google Sign In Button */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../../../assets/google.png")} // Add your Google icon
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      {/* Apple Sign In Button */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../../../assets/apple.png")} // Add your Apple icon
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Sign in with Apple</Text>
      </TouchableOpacity>
      
         {/* Home Indicator */}
      <Image
        source={require("../../../assets/Home Indicator (1).png")}
        style={styles.homeIndicator}
        resizeMode="contain"
      />    
    </View>
  );
};

export default React.memo(LoginScreen) ;
