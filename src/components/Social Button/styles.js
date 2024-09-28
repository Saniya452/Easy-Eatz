import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({
  socialButton: {
    flexDirection: 'row',
    width: '100%',
    height: width * 0.13, // Adjusting height relative to screen width for responsiveness
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.015, // Responsive border radius
    marginBottom: width * 0.04, // Space below each button relative to screen size
    paddingHorizontal: width * 0.05, // Adjusting padding to be responsive
    overflow: 'hidden',
  },
  socialIcon: {
    width: width * 0.06, // Making the icon size responsive
    height: width * 0.06, // Ensuring the icon stays square
    marginRight: width * 0.025, // Spacing between icon and text
  },
  socialButtonText: {
    fontSize: width * 0.045, // Responsive text size
    textAlign: 'center',
    flexShrink: 1,
  },
});

export default style;
