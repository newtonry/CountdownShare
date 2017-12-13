import React from 'react';
import { Button } from 'react-native';
import {
    NavigationActions,
    StackNavigator,
} from 'react-navigation';
import CountdownTimerScreen from './Screens/CountdownTimerScreen';
import CreateCountdownTimerScreen from './Screens/CreateCountdownTimerScreen';
import SignUpScreen from './Screens/SignUpScreen';
import SearchFriendsScreen from './Screens/SearchFriendsScreen';



// Custom buttons
const SettingsButton = ({ navigation }) => (
    <Button
        title={'+'}
        onPress={() => {navigation.navigate('CreateCountdownTimerScreen')}}
    />
);


export const resetNavigationToScreen = (screenName, navigation) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: screenName})
        ],
    });
    return () => { navigation.dispatch(resetAction) }
};


export const ScreenNames = {
    SignUpScreen: 'SignUpScreen',
    CountdownTimerScreen: 'CountdownTimerScreen',
    CreateCountdownTimerScreen: 'CreateCountdownTimerScreen',
    SearchFriendsScreen: 'SearchFriendsScreen',
};


export const AppNavigationComponent = StackNavigator({
    [ScreenNames.SignUpScreen]: {
        screen: SignUpScreen,
        navigationOptions: () => ({
            headerTitle: 'Sign up',
        }),
    },
    [ScreenNames.CountdownTimerScreen]: {
        screen: CountdownTimerScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: null,
            title: `Countdowns`,
            headerRight: <SettingsButton navigation={navigation} />
        }),
    },
    [ScreenNames.CreateCountdownTimerScreen]: {
        screen: CreateCountdownTimerScreen,
        navigationOptions: () => ({
            title: 'Create a new countdown',
        }),
    },
    [ScreenNames.SearchFriendsScreen]: {
        screen: SearchFriendsScreen,
        navigationOptions: () => ({
            title: 'Select friends',
        }),
    },

});
