import React, { PureComponent } from 'react';
import {
  Button,
  DatePickerIOS,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import moment from 'moment';
import { ScreenNames } from '../Navigation';
import CommonStyles from '../CommonStyles';
import Metrics from '../Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: Metrics.padding,
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
        const { expirationDate } = this.state;
        return (
        <View style={styles.container}>
            <TextInput
                placeholder="Countdown timer name"
                style={CommonStyles.inputStyle}
                onChangeText={countdownTimerName => this.setState({ countdownTimerName })}
            />
            <DatePickerIOS
                date={expirationDate}
                onDateChange={newExpirationDate => this.setState({ expirationDate: newExpirationDate })}
            />
            <Button
                title="Create timer"
                onPress={this.onPressCreate}
            />
        </View>
        );
    }
}

export default CreateCountdownTimerScreen;
