/*
 * @Describe: 个人中心item设计
 * @Author: lf
 * @Date: 2017-05-17 11:26:26
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-17 13:58:25
 * isUnderLine:是否有下横线
 * isBottom:是否有下边距
 */
import React, {Component} from 'react';

import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';

export default class SelectItem extends Component {

  render() {
    return (
      <TouchableHighlight
        underlayColor="#16E6E6"
        onPress={() => {
        this
          .props
          .onPress()
      }}>
        <View>
          <View style={styles.viewContainer}>
            <Image
              style={styles.viewContainerImageIcon}
              resizeMode={Image.resizeMode.stretch}
              source={this.props.icon}/>
            <Text style={styles.viewContainerText}>{this.props.title}</Text>
            <Image
              style={styles.viewContainerImageRight}
              resizeMode={Image.resizeMode.stretch}
              source={require('../images/go.png')}/>

          </View>
          {this.props.isUnderLine
            ? <View style={styles.viewUnderLine}></View>
            : null}
          {this.props.isBottom
            ? <View style={styles.viewBottom}></View>
            : null}
        </View>
      </TouchableHighlight>
    )

  }
}

const styles = StyleSheet.create({
  viewContainer: {
    height: 46,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewContainerImageIcon: {
    width: 35,
    height: 35,
    marginLeft: 6,
    marginRight: 6
  },
  viewContainerText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1
  },
  viewContainerImageRight: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  viewUnderLine: {
    height: 1,
    marginLeft: 47,
    backgroundColor: '#cccccc'
  },
  viewBottom: {
    height: 5,
    backgroundColor: '#dde4fa'
  }
});