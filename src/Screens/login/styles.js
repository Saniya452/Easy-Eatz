import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers the content vertically
    alignItems: "center", // Centers the content horizontally
    backgroundColor: "#fff", // White background for the screen
    paddingHorizontal: 20, // Add padding to the sides for responsiveness
  },
  welcomeText: {
    fontSize: width * 0.065, // Responsive text size
    fontWeight: "bold",
    color: "#000", // Black text color
    textAlign: "left",
    marginBottom: 20, // Space below the text
  },
  emoji: {
    fontSize: width * 0.06, // Make the emoji responsive
  },
  text:{
    textAlign:'right',
    flexDirection: "row",
    alignSelf: "flex-start",
    
  },
  input: {
    width: "100%", // Input fields take full width of the screen
    height: 50, // Standard input height
    borderWidth: 1,
    borderColor: "#ccc", // Light border for the input fields
    borderRadius: 6, // Rounded corners
    paddingHorizontal: 10, // Padding inside the input fields
    marginBottom: 15, // Space between input fields
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 20, // Space below the container
  },
  forgotPassword: {
    color: "#F7572C",
    fontSize: width * 0.04, // Responsive font size
  },
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#F7572C", // Orange background for the button
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6, // Rounded corners for the button
    marginBottom: 15, // Space below the button
  },
  signInButtonText: {
    color: "#fff", // White text color for the button
    fontSize: width * 0.045,
    fontWeight: "semibold",
  },
  orSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.01,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  orText: {
    marginHorizontal: width * 0.03,
    color: "#000",
  },
  socialButton: {
    flexDirection: "row", // Align icon and text in a row
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 15,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10, // Space between icon and text
  },
  socialButtonText: {
    fontSize: width * 0.045,
    // fontWeight: 'bold',
    textAlign: "center", // Center align the text
    flexShrink: 1,
  },
  signUpContainer: {
    flexDirection: "row", // Align "Sign up" text and link in a row
    marginBottom: 20,
  },
  signUpText: {
    color: "#999",
  },
  signUpLink: {
    color: "#F7572C",
    // fontWeight: 'bold',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 6,  // Adjust this value as needed to position it above the safe area
    width: width * 0.3,  // You can adjust the width based on the size of the image
    height: height * 0.03,  // Adjust based on the aspect ratio of the home indicator
  },
  // homeIndicatorContainer: {
  //   position: 'absolute',  // Make sure it's at the bottom of the screen
  //   bottom: 0,             // Align it to the bottom edge
  //   left: 0,
  //   right: 0,
  //   alignItems: 'center',  // Center the indicator horizontally
  //   marginBottom: 20,      // Add spacing from the bottom of the screen (adjust as needed)
  // },
  // homeIndicator: {
  //   width: width * 0.35,  // You can adjust the width based on the size of the image
  //   height: height * 0.0066,  // Adjust based on the aspect ratio of the home indicator
  //   backgroundColor: '#000', // Black color for the indicator
  //   borderRadius: 50,      // Full rounding for a pill-shaped look
  //   opacity: 0.8,          // Slight opacity for a subtle effect
  // },

});
