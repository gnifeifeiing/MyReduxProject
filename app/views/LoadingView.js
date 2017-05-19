/*
 * @Describe: 加载中view...
 * @Author: lf
 * @Date: 2017-05-17 11:27:05
 * @Last Modified by:   lf
 * @Last Modified time: 2017-05-17 11:27:05
 */
import React, {Component} from 'react';
import styles from '../styles/MainStyle'
import {Text, View, ActivityIndicator} from 'react-native';

export default class LoadingView extends Component {

  constructor(props) {
    super(props);
    this.state = { // 初始设为显示加载动画
      animating: true
    };
  }

  render() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          animating={this.state.animating}
          style={[
          styles.centering, {
            height: 80
          }
        ]}
          size="large"/>
        <Text style={styles.loadText}>加载中。。。</Text>
      </View>
    );
  }
}