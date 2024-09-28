import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/Screens/splash";
import LoginScreen from "./src/Screens/login";
import TicketScreen from "./src/Screens/ticketScreen";
import ScannerScreen from "./src/Screens/scannerScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        {/* Splash Screen */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide header on the splash screen
        />

        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header on the login screen if desired
        />
        <Stack.Screen
          name="Tickets"
          component={TicketScreen}
          options={{ headerShown: false }} // You can show or customize the header for the ticket screen
        />
        <Stack.Screen
          name="ScannerScreen"
          component={ScannerScreen}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
