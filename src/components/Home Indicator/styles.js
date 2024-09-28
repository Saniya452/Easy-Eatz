import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  homeIndicator: {
    position: 'absolute',
    bottom: height * 0.01, // Position it slightly above the bottom (2% of screen height)
    alignSelf: 'center', // Align it in the center horizontally
    width: width * 0.30, // Width of the home indicator (adjust as needed)
    height: height * 0.01, // Height of the home indicator (adjust as needed)
    borderRadius: height * 0.01, // Rounded corners to mimic the real home indicator
  }
});

export default styles;
