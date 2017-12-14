import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../Colors';


const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.MUSTARD_YELLOW,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.DARKEST_GREY,
  },
});

const Button = ({ onPress, title }) => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
