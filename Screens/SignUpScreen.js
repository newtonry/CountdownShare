/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Metrics from '../Metrics';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Metrics.doubleMargin,
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
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: Metrics.margin,
  },
});


class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
    };
  }

  onPressContinue = () => {
    console.log('Continue pressed');
    console.log(this.state);
  };

  validateInputs = () => {
    // TODO actual validations
    const {
      email, username, password, passwordConfirm,
    } = this.state;
    return (
      email &&
          username &&
          password &&
          password === passwordConfirm
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../Images/profile-image.png')}
              style={styles.profilePicture}
            />
          </View>
          <TextInput
            placeholder="Email"
            style={styles.inputStyle}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            placeholder="Username"
            style={styles.inputStyle}
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={styles.inputStyle}
            onChangeText={password => this.setState({ password })}
          />
          <TextInput
            secureTextEntry
            placeholder="Confirm password"
            style={styles.inputStyle}
            onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
          />
        </View>
        <Button
          onPress={this.onPressContinue}
          title="Continue"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default SignUpScreen;
