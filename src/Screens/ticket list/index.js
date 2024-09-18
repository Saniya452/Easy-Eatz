import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles'; // External CSS file
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you're using react-native-vector-icons

const TicketScreen = () => {
  return (
    <View style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Title Section */}
      <Text style={styles.titleText}>Tickets in Apple wallet</Text>

      {/* Scrollable Ticket Section */}
      <View style={styles.scrollableTickets}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Ticket 1 */}
          <View style={styles.ticketCard}>
            <Text style={styles.leagueText}>National Football League</Text>
            <View style={styles.teamNamesContainer}>
              <View style={styles.teamContainer}>
                <Image
                  source={require('../../../assets/jaguars-icon.png')}
                  style={styles.teamIcon}
                />
                <Text style={styles.teamNames}>Jacksonville Jaguars</Text>
              </View>
              <Text style={styles.vsText}>VS</Text>
              <View style={styles.teamContainer}>
                <Image
                  source={require('../../../assets/falcons-icon.png')}
                  style={styles.teamIcon}
                />
                <Text style={styles.teamNames}>Atlanta Falcons</Text>
              </View>
            </View>
            <View style={styles.matchDetailsRow}>
              <Text style={styles.matchDetailsLeft}>10th August 2024</Text>
              <Text style={styles.matchDetailsRight}>
                Mercedes-Benz Stadium, Atlanta, GA
              </Text>
            </View>
            <View style={styles.matchDetailsRow}>
              <Text style={styles.matchDetailsLeft}>Starting at: 4:40 PM</Text>
              <Text style={styles.matchDetailsRight}>Seat #10</Text>
            </View>
          </View>
          {/* Ticket 1 */}
          <View style={styles.ticketCard}>
            <Text style={styles.leagueText}>National Football League</Text>
            <View style={styles.teamNamesContainer}>
              <View style={styles.teamContainer}>
                <Image
                  source={require('../../../assets/jaguars-icon.png')}
                  style={styles.teamIcon}
                />
                <Text style={styles.teamNames}>Jacksonville Jaguars</Text>
              </View>
              <Text style={styles.vsText}>VS</Text>
              <View style={styles.teamContainer}>
                <Image
                  source={require('../../../assets/falcons-icon.png')}
                  style={styles.teamIcon}
                />
                <Text style={styles.teamNames}>Atlanta Falcons</Text>
              </View>
            </View>
            <View style={styles.matchDetailsRow}>
              <Text style={styles.matchDetailsLeft}>10th Aug 2024</Text>
              <Text style={styles.matchDetailsRight}>
                Mercedes-Benz Stadium, Atlanta, GA
              </Text>
            </View>
            <View style={styles.matchDetailsRow}>
              <Text style={styles.matchDetailsLeft}>Starting at: 4:40 PM</Text>
              <Text style={styles.matchDetailsRight}>Seat #10</Text>
            </View>
          </View>
          {/* Ticket 1 */}
          <View style={styles.ticketCard}>
            <Text style={styles.leagueText}>National Football League</Text>
            <View style={styles.teamNamesContainer}>
              <View style={styles.teamContainer}>
                <Image
                  source={require('../../../assets/jaguars-icon.png')}
                  style={styles.teamIcon}
                />
                <Text style={styles.teamNames}>Jacksonville Jaguars</Text>
              </View>
              <Text style={styles.vsText}>VS</Text>
              <View style={styles.teamContainer}>
                <Image
                  source={require('../../../assets/falcons-icon.png')}
                  style={styles.teamIcon}
                />
                <Text style={styles.teamNames}>Atlanta Falcons</Text>
              </View>
            </View>
            <View style={styles.matchDetailsRow}>
              <Text style={styles.matchDetailsLeft}>10th August 2024</Text>
              <Text style={styles.matchDetailsRight}>
                Mercedes-Benz Stadium, Atlanta, GA
              </Text>
            </View>
            <View style={styles.matchDetailsRow}>
              <Text style={styles.matchDetailsLeft}>Starting at: 4:40 PM</Text>
              <Text style={styles.matchDetailsRight}>Seat #10</Text>
            </View>
          </View>
          {/* Repeat similar blocks for additional tickets... */}

        </ScrollView>
      </View>

       {/* Scan Ticket Button */}
       <TouchableOpacity style={styles.scanButton}>
        <Icon name="qr-code" size={20} color="#fff" style={styles.scanButtonIcon} />
        <Text style={styles.scanButtonText}> Scan Ticket </Text>
      </TouchableOpacity>

      {/* Scan Later Button */}
      <TouchableOpacity style={styles.scanLaterButton}>
        <Text style={styles.scanLaterText}>Scan Later</Text>
      </TouchableOpacity>

      {/* Home Indicator at the bottom */}
      <View style={styles.homeIndicatorconatiner}>
      <Image
        source={require('../../../assets/Home Indicator (1).png')} // Path to your home indicator
        style={styles.homeIndicator}
        resizeMode="contain"
      />
      </View>
    </View>
  );
};

export default TicketScreen;



// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import styles from './styles'; // External CSS file

// const TicketScreen = () => {
//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
//       {/* Title Section */}
//       <Text style={styles.titleText}>Tickets in Apple wallet</Text>

//       {/* Ticket 1 */}
//       <View style={styles.ticketCard}>
//         <Text style={styles.leagueText}>National Football League</Text>
//         {/* Container for Team Names */}
// <View style={styles.teamNamesContainer}>
//   {/* First Team (Jacksonville Jaguars) */}
//   <View style={styles.teamContainer}>
//     <Image
//       source={require('../../../assets/jaguars-icon.png')} // Replace with your image path
//       style={styles.teamIcon}
//     />
//     <Text style={styles.teamNames}>Jacksonville Jaguars</Text>
//   </View>

//   {/* VS Text */}
//   <Text style={styles.vsText}>VS</Text>

//   {/* Second Team (Atlanta Falcons) */}
//   <View style={styles.teamContainer}>
//     <Image
//       source={require('../../../assets/falcons-icon.png')} // Replace with your image path
//       style={styles.teamIcon}
//     />
//     <Text style={styles.teamNames}>Atlanta Falcons</Text>
//   </View>
// </View>
//         <View style={styles.matchDetailsRow}>
//   <Text style={styles.matchDetailsLeft}>10th August 2024</Text>
//   <Text style={styles.matchDetailsRight}>Mercedes-Benz Stadium, Atlanta, GA</Text>
// </View>
// <View style={styles.matchDetailsRow}>
//   <Text style={styles.matchDetailsLeft}>Starting at: 4:40 PM</Text>
//   <Text style={styles.matchDetailsRight}>Seat #10</Text>
// </View>
//       </View>

//       {/* Ticket 2 */}
//       <View style={styles.ticketCard}>
//         <Text style={styles.leagueText}>National Football League</Text>

//                {/* Container for Team Names */}
// <View style={styles.teamNamesContainer}>
//   {/* First Team (Buffalo Bills ) */}
//   <View style={styles.teamContainer}>
//     <Image
//       source={require('../../../assets/bills-icon.png')} // Replace with your image path
//       style={styles.teamIcon}
//     />
//     <Text style={styles.teamNames}>Buffalo Bills </Text>
//   </View>

//   {/* VS Text */}
//   <Text style={styles.vsText}>VS</Text>

//   {/* Second Team (Atlanta Falcons) */}
//   <View style={styles.teamContainer}>
//     <Image
//       source={require('../../../assets/falcons-icon.png')} // Replace with your image path
//       style={styles.teamIcon}
//     />
//     <Text style={styles.teamNames}>Atlanta Falcons</Text>
//   </View>
// </View>
//         <View style={styles.matchDetailsRow}>
//   <Text style={styles.matchDetailsLeft}>12th August 2024</Text>
//   <Text style={styles.matchDetailsRight}>Mercedes-Benz Stadium, Atlanta, GA</Text>
// </View>
// <View style={styles.matchDetailsRow}>
//   <Text style={styles.matchDetailsLeft}>Starting at : 8:40 PM</Text>
//   <Text style={styles.matchDetailsRight}>Seat #65</Text>
// </View>
//       </View>
//       {/* Ticket 1 */}
//       <View style={styles.ticketCard}>
//         <Text style={styles.leagueText}>National Football League</Text>
//         {/* Container for Team Names */}
// <View style={styles.teamNamesContainer}>
//   {/* First Team (Jacksonville Jaguars) */}
//   <View style={styles.teamContainer}>
//     <Image
//       source={require('../../../assets/jaguars-icon.png')} // Replace with your image path
//       style={styles.teamIcon}
//     />
//     <Text style={styles.teamNames}>Jacksonville Jaguars</Text>
//   </View>

//   {/* VS Text */}
//   <Text style={styles.vsText}>VS</Text>

//   {/* Second Team (Atlanta Falcons) */}
//   <View style={styles.teamContainer}>
//     <Image
//       source={require('../../../assets/falcons-icon.png')} // Replace with your image path
//       style={styles.teamIcon}
//     />
//     <Text style={styles.teamNames}>Atlanta Falcons</Text>
//   </View>
// </View>
//         <View style={styles.matchDetailsRow}>
//   <Text style={styles.matchDetailsLeft}>10th August 2024</Text>
//   <Text style={styles.matchDetailsRight}>Mercedes-Benz Stadium, Atlanta, GA</Text>
// </View>
// <View style={styles.matchDetailsRow}>
//   <Text style={styles.matchDetailsLeft}>Starting at: 4:40 PM</Text>
//   <Text style={styles.matchDetailsRight}>Seat #10</Text>
// </View>
//       </View>

//       {/* Ticket 2 */}
//       <View style={styles.ticketCard}>
//         <Text style={styles.leagueText}>National Football League</Text>

//                {/* Container for Team Names */}
// <View style={styles.teamNamesContainer}>
//   {/* First Team (Buffalo Bills ) */}
//   <View style={styles.teamContainer}>
//     <Image
//       source={require('../../../assets/bills-icon.png')} // Replace with your image path
//       style={styles.teamIcon}
//     />
//     <Text style={styles.teamNames}>Buffalo Bills </Text>
//   </View>

//   {/* VS Text */}
//   <Text style={styles.vsText}>VS</Text>

//   {/* Second Team (Atlanta Falcons) */}
//   <View style={styles.teamContainer}>
//     <Image
//       source={require('../../../assets/falcons-icon.png')} // Replace with your image path
//       style={styles.teamIcon}
//     />
//     <Text style={styles.teamNames}>Atlanta Falcons</Text>
//   </View>
// </View>
//         <View style={styles.matchDetailsRow}>
//   <Text style={styles.matchDetailsLeft}>12th August 2024</Text>
//   <Text style={styles.matchDetailsRight}>Mercedes-Benz Stadium, Atlanta, GA</Text>
// </View>
// <View style={styles.matchDetailsRow}>
//   <Text style={styles.matchDetailsLeft}>Starting at : 8:40 PM</Text>
//   <Text style={styles.matchDetailsRight}>Seat #65</Text>
// </View>
//       </View>

//       {/* Buttons Section */}
//       <TouchableOpacity style={styles.scanButton}>
//         <Text style={styles.scanButtonText}>Scan Ticket</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.scanLaterButton}>
//         <Text style={styles.scanLaterText}>Scan Later</Text>
//       </TouchableOpacity>
//         {/* Home Indicator */}
//   <View style={styles.homeIndicatorContainer}>
//     <View style={styles.homeIndicator} />
//   </View>
//     </ScrollView>
    
//   );
// };

// export default TicketScreen;
