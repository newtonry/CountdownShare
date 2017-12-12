import React, { PureComponent } from 'react';
import {
  Button,
  DatePickerIOS,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import moment from 'moment';
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
        console.log(this.state);
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
                    onPress={this.onPressCreate}
                    title="Create timer"
                />
            </View>
        );
    }
}

export default CreateCountdownTimerScreen;
