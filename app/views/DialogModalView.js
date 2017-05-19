/*
 * @Describe: 请求中。。。网络对话框
 * @Author: lf
 * @Date: 2017-05-17 11:27:22
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-17 11:27:47
 */
import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity
} from 'react-native';

export default class DialogModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }

  showDialog() {
    this.setState({modalVisible: true});
  }

  hideDialog() {
    this.setState({modalVisible: false});
  }

  render() {

    return (
      <Modal
        style={styles.container}
        animationType={'fade'}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
        this._setModalVisible(false)
      }}>
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.innerText}>请求中...</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#23aefe',
    paddingTop: 20,
    paddingBottom: 20
  },
  innerText: {
    color: '#ffffff',
    fontSize: 20
  }
});
