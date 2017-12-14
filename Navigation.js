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
import Colors from './Colors';


const commonNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.DARKEST_GREY,
  },
  headerTitleStyle: {
    color: Colors.WHITE,
  },
  headerTintColor: Colors.WHITE,
};


// Custom buttons
const SettingsButton = ({ navigation }) => (
  <Button
    title="+"
    onPress={() => { navigation.navigate('CreateCountdownTimerScreen'); }}
  />
);


export const resetNavigationToScreen = (screenName, navigation) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: screenName }),
    ],
  });
  return navigation.dispatch(resetAction);
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
      header: null,
    }),
  },
  [ScreenNames.CountdownTimerScreen]: {
    screen: CountdownTimerScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      title: 'Countdowns',
      headerRight: <SettingsButton navigation={navigation} />,
      ...commonNavigationOptions,
    }),
  },
  [ScreenNames.CreateCountdownTimerScreen]: {
    screen: CreateCountdownTimerScreen,
    navigationOptions: () => ({
      title: 'Create a new countdown',
      ...commonNavigationOptions,
    }),
  },
  [ScreenNames.SearchFriendsScreen]: {
    screen: SearchFriendsScreen,
    navigationOptions: () => ({
      title: 'Select friends',
      ...commonNavigationOptions,
    }),
  },

});
