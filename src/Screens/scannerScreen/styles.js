import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F7572C", // Orange background color (adjust if needed)
  },
  cameraView: {
    flex: 1,
    width: '100%',
  },
  scanBox: {
    position: 'absolute',
    top: height * 0.30,  // 30% from the top of the screen, responsive
    left: width * 0.20, // 20% from the left of the screen, responsive
    width: width * 0.6, // 60% of screen width, responsive
    height: height * 0.35, // 35% of screen height, responsive
    borderWidth: 4,
    borderColor: '#F7572C',
    borderRadius: 10,
    zIndex: 1,
  },
  topMargin: {
    height: height * 0.06, // 6% of screen height for top margin
    backgroundColor: colors.orange,
  },
  bottomMargin: {
    height: height * 0.07, // 7% of screen height for bottom margin
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;
