/*
 * @Describe: 自定义button
 * @Author: lf
 * @Date: 2017-05-17 11:27:54
 * @Last Modified by:   lf
 * @Last Modified time: 2017-05-17 11:27:54
 */
import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet, TouchableHighlight} from 'react-native';

export default class CustomButton extends Component {

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.sendBroadcastBtn}>发送广播</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50
  },
  sendBroadcastBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#faf2e7',
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c18582'
  }
});