/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { ScreenNames } from '../Navigation';
import CommonStyles from '../CommonStyles';
import Metrics from '../Metrics';
import Colors from '../Colors';
import Button from '../Components/Button';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: Metrics.doubleMargin,
  },
  profilePicture: {
    borderWidth: 1,
    borderColor: '#AFAFAF',
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});


class SignUpScreen extends Component {
  constructor(props) {
    super(props);
  }

  onPressContinue = () => {
    const { navigation } = this.props;
    navigation.navigate(ScreenNames.CountdownTimerScreen);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{
 width: '100%', height: '100%', position: 'absolute', alignItems: 'center',
}}
        >
          <Image
            source={require('../Images/spiral-clock.png')}
            style={{ flex: 1 }}
          />
        </View>

        <View />
        <Button
          onPress={this.onPressContinue}
          title="Sign up with Facebook"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}


export default SignUpScreen;
