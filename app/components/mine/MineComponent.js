/*
 * @Describe: 个人中心
 * @Author: lf
 * @Date: 2017-05-15 14:16:22
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-17 16:13:22
 */
import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';

import styles from '../../styles/mine/MineStyle';
import TitleBarView from '../../views/TitleBarView';
import SelectItem from '../../views/SelectItem';

import AboutSinoComponent from '../mine/AboutSinoComponent';

export default class MineComponent extends Component {

  constructor(props) {
    super(props);
  }

  _toAboutSino() {
    this
      .props
      .navigator
      .push({component: AboutSinoComponent});
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBarView navigator={this.props.navigator} text="退出"/>
        <View style={styles.viewContainer}>
          <SelectItem
            icon={require('../../images/user_account.png')}
            title='我的账户'
            onPress={() => {
            this._toAboutSino();
          }}
            isUnderLine={true}/>

          <SelectItem
            icon={require('../../images/user_password.png')}
            isUnderLine={true}
            onPress={() => {
            this._toAboutSino();
          }}
            title='修改密码'/>
          <SelectItem
            icon={require('../../images/user_printer.png')}
            title='打印设置'
            onPress={() => {
            this._toAboutSino();
          }}
            isUnderLine={true}/>

          <SelectItem
            icon={require('../../images/user_item.png')}
            isBottom={true}
            onPress={() => {
            this._toAboutSino();
          }}
            title='货物维护'/>
          <SelectItem
            icon={require('../../images/user_refresh.png')}
            title='检测更新'
            onPress={() => {
            this._toAboutSino();
          }}
            isBottom={true}/>

          <SelectItem
            icon={require('../../images/user_help.png')}
            isUnderLine={true}
            onPress={() => {
            this._toAboutSino();
          }}
            title='使用帮助'/>
          <SelectItem
            icon={require('../../images/about_sino.png')}
            title='关于硕诺'
            onPress={() => {
            this._toAboutSino();
          }}
            isUnderLine={true}/>

          <SelectItem
            icon={require('../../images/feed_back.png')}
            isBottom={true}
            onPress={() => {
            this._toAboutSino();
          }}
            title='意见反馈'/>
        </View>
      </View>
    )
  }

}