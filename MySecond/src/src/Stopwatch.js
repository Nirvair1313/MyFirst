import React, { Component } from 'react';
import {StyleSheet,Text,View, TouchableHighlight } from 'react-native';

 
class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      StopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      StopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
 
  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }
 
  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }
 
  toggleStopwatch() {
    this.setState({StopwatchStart: !this.state.StopwatchStart, StopwatchReset: false});
  }
 
  resetStopwatch() {
    this.setState({StopwatchStart: false, StopwatchReset: true});
  }
  
  getFormattedTime(time) {
      this.currentTime = time;
  };
 
  render() {
    return (
      <View>
        <Stopwatch laps msecs start={this.state.StopwatchStart}
          reset={this.state.StopwatchReset}
          options={options}
          getTime={this.getFormattedTime} />
        <TouchableHighlight onPress={this.toggleStopwatch}>
          <Text style={{fontSize: 30}}>{!this.state.StopwatchStart ? "Start" : "Stop"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetStopwatch}>
          <Text style={{fontSize: 30}}>Reset</Text>
        </TouchableHighlight>
        <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime} />
        <TouchableHighlight onPress={this.toggleTimer}>
          <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetTimer}>
          <Text style={{fontSize: 30}}>Reset</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("custom completion function");
 
const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};
 

export default Stopwatch;