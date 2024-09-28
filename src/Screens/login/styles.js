import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("window");

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.06, // Responsive horizontal margin
  },
  emoji: {
    fontSize: width * 0.06, // Make the emoji responsive
  },
  text: {
    textAlign: 'right',
    flexDirection: "row",
    alignSelf: "flex-start",
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
  footerText: {
    color: colors.midgrey,
    fontSize: width * 0.038, // Responsive font size
    textAlign: 'center',
    marginVertical: height * 0.01, // Responsive vertical margin (1% of screen height)
  },
  footerLink: {
    color: colors.orange,
    fontWeight: 'bold',
  },
});

export default styles;