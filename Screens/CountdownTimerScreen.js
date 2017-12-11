import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import moment from 'moment';
import CountdownTimerRow from '../Components/CountdownTimerRow';
import Metrics from '../Metrics';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Metrics.doubleMargin,
  },
});

const mockCountdownTimers = [
  { name: 'Super close timer', finishDate: moment().add(30, 'minutes'), id: 1 },
  { name: 'Close timer', finishDate: moment().add(1, 'hours'), id: 2 },
  { name: 'Distant timer', finishDate: moment().add(5, 'days'), id: 3 },
];

const CountdownTimerScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={mockCountdownTimers}
      renderItem={rowData => <CountdownTimerRow countdownTimer={rowData.item} />}
      ItemSeparatorComponent={() => (<View />)}
    />
  </View>
);

export default CountdownTimerScreen;
