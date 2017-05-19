/*
 * @Describe: 关于硕诺
 * @Author: lf
 * @Date: 2017-05-17 14:45:02
 * @Last Modified by:   lf
 * @Last Modified time: 2017-05-17 14:45:02
 */
import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';

import styles from '../../styles/mine/AboutSinoStyle';
import TitleBarView from '../../views/TitleBarView';

export default class AboutSinoComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBarView navigator={this.props.navigator} text="关于硕诺"/>
        <Image
          style={styles.containerImageHead}
          resizeMode={Image.resizeMode.stretch}
          source={require('../../images/sino.png')}/>
        <View style={styles.viewUnderLine}></View>
        <Text style={styles.containerTextHead}>中国最大物流SAS物流专线平台</Text>
        <Text style={styles.containerTextHeadSmall}>www.shuonuotech.com</Text>
      </View>
    )
  }
}