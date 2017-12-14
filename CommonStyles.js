import { StyleSheet } from 'react-native';
import Colors from './Colors';
import Metrics from './Metrics';

export default StyleSheet.create({
  inputStyle: {
    height: 75,
    backgroundColor: Colors.WHITE,
    padding: Metrics.doublePadding,
    color: Colors.DARKEST_GREY,
    fontSize: 20,
  },
});
