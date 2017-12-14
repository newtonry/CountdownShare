import React, { PureComponent } from 'react';
import {
  DatePickerIOS,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import moment from 'moment';
import { ScreenNames } from '../Navigation';
import CommonStyles from '../CommonStyles';
import Button from '../Components/Button';
import Metrics from '../Metrics';
import Colors from '../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHTEST_GREY,
    justifyContent: 'space-between',
  },
});

class CreateCountdownTimerScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expirationDate: moment().add(5, 'minutes').toDate(),
      countdownTimerName: null,
    };
  }

    onPressCreate = () => {
      const { navigation } = this.props;
      navigation.navigate(ScreenNames.SearchFriendsScreen);
    };

    render() {
      const { countdownTimerName, expirationDate } = this.state;
      return (
        <View style={styles.container}>
          <View>
            <TextInput
              autoCorrect={false}
              placeholder="Countdown name"
              placeholderTextColor={Colors.LIGHTER_GREY}
              selectionColor={Colors.MID_GREY}
              style={CommonStyles.inputStyle}
            />
            <DatePickerIOS
              date={expirationDate}
              onDateChange={newExpirationDate => this.setState({ expirationDate: newExpirationDate })}
            />
          </View>
          <Button
            title="Create timer"
            onPress={this.onPressCreate}
          />
        </View>
      );
    }
}

export default CreateCountdownTimerScreen;
