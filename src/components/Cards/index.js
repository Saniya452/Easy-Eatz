import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const TicketCard = ({ league, homeTeam, homeTeamIcon, awayTeam, awayTeamIcon, date, stadium, startTime, seatNumber }) => {
  return (
    <View style={styles.ticketCard}>
      <Text style={styles.leagueText}>{league}</Text>
      <View style={styles.teamNamesContainer}>
        <View style={styles.teamContainer}>
          <Image source={homeTeamIcon} style={styles.teamIcon} />
          <Text style={styles.teamNames}>{homeTeam}</Text>
        </View>
        <Text style={styles.vsText}> VS </Text>
        <View style={styles.teamContainer}>
          <Image source={awayTeamIcon} style={styles.teamIcon} />
          <Text style={styles.teamNames}>{awayTeam}</Text>
        </View>
      </View>
      <View style={styles.matchDetailsRow}>
        <Text style={styles.matchDetailsLeft} numberOfLines={1}>
          {date}
        </Text>
        <Text style={styles.matchDetailsRight} numberOfLines={1}>
          {stadium}
        </Text>
      </View>
      <View style={styles.matchDetailsRow}>
        <Text style={styles.matchDetailsLeft} numberOfLines={1}>
          Starting at: {startTime}
        </Text>
        <Text style={styles.matchDetailsRight} numberOfLines={1}>
          Seat #{seatNumber}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(TicketCard);
