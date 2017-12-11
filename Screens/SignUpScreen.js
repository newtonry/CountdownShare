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

    onPressContinue = () => {
      console.log('Continue pressed');
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
                        placeholder={"Email"}
                        style={styles.inputStyle}
                    />
                    <TextInput
                        placeholder={"Username"}
                        style={styles.inputStyle}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder={"Password"}
                        style={styles.inputStyle}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder={"Confirm password"}
                        style={styles.inputStyle}
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
};

export default SignUpScreen;
