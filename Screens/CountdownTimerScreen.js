import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import moment from 'moment';
import CountdownTimerRow from '../Components/CountdownTimerRow';
import Metrics from '../Metrics';
import Colors from '../Colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHTEST_GREY,
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
      style={{ padding: Metrics.padding }}
      data={mockCountdownTimers}
      renderItem={rowData => <CountdownTimerRow countdownTimer={rowData.item} />}
      keyExtractor={item => `countdown-timer-row-id-${item.id}`}
      ItemSeparatorComponent={() => (<View />)}
    />
  </View>
);

export default CountdownTimerScreen;
