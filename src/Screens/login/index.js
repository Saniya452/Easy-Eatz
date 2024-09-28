import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SocialButton from "../../components/Social Button";
import HomeIndicator from "../../components/Home Indicator";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Title>
        Welcome to Food Grab <Text style={styles.emoji}>👋</Text>
      </Title>
      <Text style={styles.text}>Email</Text>
      <Input placeholder="Email" keyboardType="email-address" />
      <Text style={styles.text}>Password</Text>
      <Input placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <Button
        style={styles.signInButton}
        onPress={() => navigation.navigate("Tickets")}>Log in </Button>
      <Text style={styles.footerText}>
        Don't have an account?{" "}
        <Text
          // onPress={() => navigation.navigate("Signup")}
          style={styles.footerLink}
        >
          {" "}
          Sign up!
        </Text>
      </Text>
      <View style={styles.orSection}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>
      <SocialButton
        iconSource={require("../../../assets/google.png")}
        buttonText="Sign in with Google"
        onPress={() => {}}
      />
      <SocialButton
        iconSource={require("../../../assets/apple.png")}
        buttonText="Sign in with Apple"
        onPress={() => {}}
      />
      <HomeIndicator />
    </SafeAreaView>
  );
};

export default React.memo(LoginScreen);
