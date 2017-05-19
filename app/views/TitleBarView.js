/*
 * @Describe: 公共titleBar
 * @Author: lf
 * @Date: 2017-05-17 11:26:48
 * @Last Modified by:   lf
 * @Last Modified time: 2017-05-17 11:26:48
 */
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  BackHandler
} from 'react-native';

class TitleBarView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
          if (this.props.navigator.getCurrentRoutes().length <= 1) {
            BackHandler.exitApp();
          } else {
            this
              .props
              .navigator
              .pop();
          }
        }}>
          <View style={styles.imageView}>
            <Image
              style={styles.imageStyle}
              source={require('../images/actionbar_return.png')}></Image>
          </View>
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>{this.props.text || "标题头"}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#60bce9'
  },
  imageView: {
    alignSelf: 'center'
  },
  textView: {
    alignSelf: 'center'
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  imageStyle: {
    flex: 1,
    width: 50,
    height: 45,
    marginTop: 8,
    marginBottom: 8
  }
});

export default TitleBarView;
