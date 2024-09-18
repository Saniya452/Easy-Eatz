import { StyleSheet, Dimensions } from 'react-native';

// Get device width and height for responsive design
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: width * 0.065, // Scales text size based on device width
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 30,
  },
  scrollableTickets: {
    flex: 1, // Allow the scrollable section to take up available space
    maxHeight: height * 0.6, // Restrict scrolling area height to 60% of screen height
  },
  ticketCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderColor: '#d3d3d3', // Light grey border
    borderWidth: 1,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  leagueText: {
    textAlign: 'center',
    fontSize: width * 0.04,
    color: '#000',
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    marginTop: 10,
    fontWeight:'semibold',
  },
  teamNamesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  teamContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  teamIcon: {
    width: width * 0.15,
    height: width * 0.15,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  vsText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#FF6A3D',
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  teamNames: {
    textAlign: 'center',
    fontSize: width * 0.04,
    fontWeight: '700',
    color: '#000',
  },
  matchDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  matchDetailsLeft: {
    color: '#000',
    fontSize: width * 0.030,
    fontWeight: '700',
  },
  matchDetailsRight: {
    color: '#666666',
    fontSize: width * 0.030,
    // fontWeight: 'bold',
  },
  scanButton: {
    flexDirection: 'row', // Arrange icon and text in a row
    alignItems: 'center', // Vertically align the icon and text
    backgroundColor: '#FF6A3D',
    paddingVertical: 12,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 20,
  },
  scanButtonIcon: {
    marginRight: 8, // Add space between the icon and text
  },
  scanButtonText: {
    alignItems: 'center',
    color: '#fff',
    fontSize: width * 0.045, // Adjust size for responsiveness
    fontWeight: 'bold',
  },
  scanLaterButton: {
    borderWidth: 1.5, // Black border
    borderColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 15,
  },
  scanLaterText: {
    color: '#000',
    fontWeight:'bold',
    fontSize: width * 0.045, // Adjust size for responsiveness
    textAlign: 'center',
  },
  homeIndicatorconatiner: {
    alignItems: 'center',
    marginTop: 30,
  },
  homeIndicator: {      
    position: 'absolute',
    // justifyContent:'center',
    // bottom: 6,  // Adjust this value as needed to position it above the safe area
    width: width * 0.3,  // You can adjust the width based on the size of the image
    height: height * 0.03,  // Adjust based on the aspect ratio of the home indicator
  },
  
});

export default styles;



// import { StyleSheet, Dimensions } from 'react-native';

// // Get device width and height for responsive design
// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   titleText: {
//     fontSize: width * 0.06, // Scales text size based on device width
//     fontWeight: 'bold',
//     textAlign: 'left',
//     marginBottom: 20,
//     marginTop:30,
//   },
//   ticketCard: {
//     // backgroundColor: '#f8f8f8',
//     backgroundColor: '#f2f2f2',
//     borderRadius: 10,
//     borderColor: '#d3d3d3', // Light grey border
//     borderWidth: 1, // Add border
//     marginBottom: 20,
//     overflow: 'hidden', // Ensures contents don't overlap
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2, // For Android shadow
//   },
//   leagueText: {
//     textAlign: 'center',
//     fontSize: width * 0.04,
//     color: '#000',
//     backgroundColor: '#f2f2f2',
//     marginBottom: 10,
//     marginTop: 10,
//   },teamNamesContainer: {
//     flexDirection: 'row', // Align icons and names horizontally
//     justifyContent: 'space-between', // Space out teams and VS text
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2', // Light grey background for the entire container
//     paddingVertical: 10,
//     paddingHorizontal: 15, // Add padding for responsiveness
//     borderRadius: 8, // Slight rounding for aesthetic
//   },
//   teamContainer: {
//     flexDirection: 'column', // Align icon and name vertically
//     alignItems: 'center', // Center align the items within each team container
//     flex: 1, // Take up equal space for both teams
//   },
//   teamIcon: {
//     width: width * 0.15, // Responsive size for the team icons
//     height: width * 0.15, // Make it square
//     resizeMode: 'contain',
//     marginBottom: 5, // Space between the icon and team name
//   },
//   vsText: {
//     fontSize: width * 0.05,
//     fontWeight: 'bold',
//     color: '#FF6A3D', // Color for "VS"
//     marginHorizontal: 20, // Space between the teams
//     alignSelf: 'center',
//   },
//   teamNames: {
//     textAlign: 'center',
//     fontSize: width * 0.04, // Adjust font size based on screen width
//     fontWeight: '800',
//     color: '#000',
//   },
  
//   matchDetailsContainer: {
//     backgroundColor: '#fff',  // White background for match details
//     padding: 8, // Adjust padding for internal spacing
//   },
//   matchDetailsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // This will place the two Text elements on either side
//     // alignItems: 'center', // Vertically center-align the text
//     paddingVertical: 4, // Add space without causing visible lines
//     backgroundColor: '#fff', // White background to match the container
//     paddingHorizontal: 10, // Add some padding on the sides
//   },
//   matchDetailsLeft: {
//     color: '#000', // Black text for the left side
//     fontSize: width * 0.035, // Responsive font size
//     fontWeight: 'bold',
//     // flex: 1, // This will allow the text to adjust within half of the screen
//   },
//   matchDetailsRight: {
//     color: '#777', // Light grey text for the right side
//     fontSize: width * 0.035, // Responsive font size
//     textAlign: 'right', // Align the text to the right
//     fontWeight: '400',
//     flex: 1, // This will allow the text to adjust within half of the screen
//   },
 
//   scanButton: {
//     backgroundColor: '#FF6A3D',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   scanButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   scanLaterButton: {
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#FF6A3D',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   scanLaterText: {
//     color: '#FF6A3D',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   homeIndicatorContainer: {
//     alignItems: 'center',
//     marginTop: 20, // Adjust space from the elements above
//     marginBottom: height * 0.03, // Space from the bottom of the screen
//   },
//   homeIndicator: {
//     width: width * 0.30, // Responsive width, set to a percentage for adaptability
//     height: height * 0.006, // Smaller height for a clean indicator
//     backgroundColor: '#000', // Black color for consistency
//     borderRadius: 3, // Rounded edges similar to the login page indicator
//   },
  
// });

// export default styles;
