import React from 'react';
import { View, ScrollView, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Title from '../../components/Title';
import Button from '../../components/Button';
import HomeIndicator from '../../components/Home Indicator';
import TicketCard from '../../components/Cards'; 
import ScannerScreen from '../scannerScreen';

const tickets = [
  {
    league: "National Football League",
    homeTeam: "Jacksonville Jaguars",
    homeTeamIcon: require('../../../assets/jaguars-icon.png'),
    awayTeam: "Atlanta Falcons",
    awayTeamIcon: require('../../../assets/falcons-icon.png'),
    date: "10th August 2024",
    stadium: "Mercedes-Benz Stadium, Atlanta, GA",
    startTime:"4:40 PM",
    seatNumber: "10"
  },
  {
    league: "National Football League",
    homeTeam: "Buffalo Bills ",
    homeTeamIcon: require('../../../assets/bills-icon.png'),
    awayTeam: "Atlanta Falcons",
    awayTeamIcon: require('../../../assets/falcons-icon.png'),
    date: "15th September 2024",
    stadium: "MetLife Stadium, East Rutherford, NJ",
    startTime: "1:00PM",
    seatNumber: "22"
  },
  {
    league: "National Football League",
    homeTeam: "Jacksonville Jaguars",
    homeTeamIcon: require('../../../assets/jaguars-icon.png'),
    awayTeam: "Buffalo Bills",
    awayTeamIcon: require('../../../assets/bills-icon.png'),
    date: "20th October 2024",
    stadium: "Levi's Stadium, Santa Clara, CA",
    startTime: "7:20 PM",
    seatNumber: "35"
  }
];

const TicketScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title> Tickets in Apple Wallet </Title>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {tickets.map((ticket, index) => (
          <TicketCard
            key={index} // Unique key for each ticket
            league={ticket.league}
            homeTeam={ticket.homeTeam}
            homeTeamIcon={ticket.homeTeamIcon}
            awayTeam={ticket.awayTeam}
            awayTeamIcon={ticket.awayTeamIcon}
            date={ticket.date}
            stadium={ticket.stadium}
            startTime={ticket.startTime}
            seatNumber={ticket.seatNumber}
          />
        ))}
      </ScrollView>

      <Button onPress={() => navigation.navigate('ScannerScreen')}>
        <Icon name="qr-code" size={20} color="#fff" style={styles.scanButtonIcon} />  Scan Ticket
      </Button>

      <TouchableOpacity style={styles.scanLaterButton}>
        <Text style={styles.scanLaterText}>Scan Later</Text>
      </TouchableOpacity>

      <HomeIndicator />
    </SafeAreaView>
  );
};

export default TicketScreen;
