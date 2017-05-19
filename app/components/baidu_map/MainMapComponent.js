/*
 * @Describe: 地图页
 * @Author: lf
 * @Date: 2017-04-25 14:16:22
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-18 09:06:38
 */
import React, {Component} from 'react';
import {Text, View, Platform} from 'react-native';
import {connect} from 'react-redux';

import styles from '../../styles/baidu_map/MainMapStyle';

import BaiduMapDemo from './BaiduMapDemo';

export default class MainMapComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.info("os:", Platform.OS);
    if (Platform.OS === 'android') {
      return (<BaiduMapDemo/>);
    } else {
      return (
        <View style={{
          flex: 1
        }}>
          <Text>mac os 百度地图</Text>
        </View>
      );
    }

  }
}
