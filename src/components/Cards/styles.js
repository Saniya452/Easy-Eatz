import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  ticketCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  leagueText: {
    textAlign: 'center',
    fontSize: width * 0.04,
    color: '#000',
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'semibold',
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
    fontSize: width * 0.045,
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
    fontSize: width * 0.03,
    fontWeight: '700',
    flexShrink: 1,
  },
  matchDetailsRight: {
    color: '#666666',
    fontSize: width * 0.03,
    flexShrink: 1,
  },
});

export default styles;
