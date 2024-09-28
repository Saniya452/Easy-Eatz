import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 10,  // Adjust padding to make space for scrolling
  },
  scanButtonIcon: {
    marginRight: 10,
  },
  scanLaterButton: {
    borderWidth: 1.5,
    borderColor: '#000',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    bottom: height * 0.01, // Position it slightly above the bottom (2% of screen height)
    borderRadius: 10,
    marginTop: 8,
  },
  scanLaterText: {
    textAlign: 'center',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default styles;