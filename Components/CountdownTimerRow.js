import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Metrics from '../Metrics';


const styles = StyleSheet.create({
  countdownTimerRow: {
    marginBottom: Metrics.margin,
  },
  timerNameText: {
    fontSize: 25,
    fontWeight: '700',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '800',
  },
});


const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SECOND;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;

class CountdownTimerRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.updateCurrentTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateCurrentTime = () => {
    this.setState({
      currentTime: moment(),
    });
  };


  renderCountdownString = (millisecondsLeft) => {
    // TODO there must be an easier way to do this?
    let remaining = millisecondsLeft;
    const days = Math.floor(remaining / MS_IN_DAY);
    remaining = millisecondsLeft % MS_IN_DAY;
    const hours = Math.floor(remaining / MS_IN_HOUR);
    remaining = millisecondsLeft % MS_IN_HOUR;
    const minutes = Math.floor(remaining / MS_IN_MINUTE);
    remaining = millisecondsLeft % MS_IN_MINUTE;
    const seconds = Math.floor(remaining / MS_IN_SECOND);
    return `${days}:${hours}:${minutes}:${seconds}`;
  };

  render() {
    const { countdownTimer } = this.props;
    const { currentTime } = this.state;
    const timeLeft = countdownTimer.finishDate.diff(currentTime);

    const countdownString = this.renderCountdownString(timeLeft);

    return (
      <View
        key={`countdownTimer-${countdownTimer.id}-timeLeft`}
        style={styles.countdownTimerRow}
      >
        <Text style={styles.timerNameText}>{countdownTimer.name}</Text>
        <Text style={styles.timerText}>{countdownString}</Text>
      </View>
    );
  }
}

CountdownTimerRow.propTypes = {
  // countdownTimer: PropTypes.object(),
};


export default CountdownTimerRow;
