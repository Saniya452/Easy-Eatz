import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    // Main container that covers the full screen
    container: {
      flex: 1, // Takes the full height of the screen
      justifyContent: "center", // Centers content vertically
      alignItems: "center", // Centers content horizontally
      backgroundColor: "#F7572C", // Orange background color (adjust if needed)
    },
    // Style for the logo icon
    icon: {
      width: width * 0.2, // Icon takes 30% of the screen width (responsive)
      height: width * 0.2, // Keeps the height proportional to the width
      marginBottom: height * 0.03, // Space between the icon and text
    },
    // Container for the text
    textContainer: {
      width: "80%", // Set a width for the text container to prevent text overflow
      // alignItems: "center", // Center the text inside the container
    },
    // Style for the text below the icon
    text: {
      fontSize: width * 0.07, // Text size responsive to screen width
      color: "white", // White text color
      fontWeight: '900',
      textAlign: "center",
    },
    homeIndicator: {
        position: 'absolute',
        bottom: 6,  // Adjust this value as needed to position it above the safe area
        width: width * 0.3,  // You can adjust the width based on the size of the image
        height: height * 0.03,  // Adjust based on the aspect ratio of the home indicator
      },
  });

  export default styles;