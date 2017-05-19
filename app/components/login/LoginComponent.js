/*
 * @Describe: 登录
 * @Author: lf
 * @Date: 2017-04-25 14:16:22
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-18 11:26:51
 */
import React, {Component} from 'react';
import {
  Modal,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Button,
  Switch
} from 'react-native';
import {connect} from 'react-redux';
import {Navigator} from 'react-native-deprecated-custom-components';
import CheckBox from 'react-native-checkbox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import styles from '../../styles/login/LoginStyle';
import LoadingView from '../../views/LoadingView';
import TitleBarView from '../../views/TitleBarView';
import CustomButton from '../../views/CustomButton';
import DialogModalView from '../../views/DialogModalView';

import {main} from '../../avtion/login/LoginAction';
import MineComponent from '../../components/mine/MineComponent';
import Main from '../Main';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPwd: '',
      isMemoryPwd: true, //是否记住密码
      modalVisible: false
    };
  }

  loginToMain() {
    //请求地址，获取登录数据
    this
      .props
      .main();
    //显示请求对话框
    this
      .dialogModalView
      .showDialog();
  }

  //当reducer数据更新触发此方法
  shouldComponentUpdate(nextProps, nextState) {
    const {LoginReducer} = nextProps;
    //返回 false，则 render() 将不会执行
    if (LoginReducer.result && nextProps !== this.props) {
      console.info("--------", "shouldComponentUpdate");
      this
        .dialogModalView
        .hideDialog();
      this
        .props
        .navigator
        .replace({name: 'chapter', component: Main, sceneConfig: Navigator.SceneConfigs.FloatFromLeft})
    }
    return nextProps.id !== this.props.id;
  }

  render() {
    const {LoginReducer} = this.props;
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <DialogModalView
            ref={ref => {
            this.dialogModalView = ref
          }}/>
          <TitleBarView navigator={this.props.navigator} text="退出"/>
          <View style={styles.imgHeader}>
            <Image
              source={require('../../images/login_top.png')}
              resizeMode={Image.resizeMode.stretch}/>
          </View>
          <View style={styles.body}>
            <View style={{
              flexDirection: 'row-reverse'
            }}>
              <Text
                style={{
                color: '#7EC0EE',
                marginLeft: 15,
                marginTop: 8,
                marginRight: 15,
                fontSize: 17
              }}>网络状态：WIFI已连接</Text>
            </View>
            <View style={styles.inputView}>
              <View style={{
                flexDirection: 'row'
              }}>
                <Image
                  source={require('../../images/username.png')}
                  resizeMode={Image.resizeMode.stretch}
                  style={styles.inputImage}/>
                <TextInput
                  placeholder='用户名'
                  underlineColorAndroid='transparent'
                  style={styles.textInput}
                  onChangeText={(userName) => this.setState({userName})}/>
              </View>
              <View style={{
                flexDirection: 'row'
              }}>
                <Image
                  source={require('../../images/user_password.png')}
                  resizeMode={Image.resizeMode.stretch}
                  style={styles.inputImage}/>
                <TextInput
                  placeholder='密码'
                  secureTextEntry
                  ={true}
                  password={true}
                  underlineColorAndroid='transparent'
                  style={styles.textInput}
                  onChangeText={(userPwd) => this.setState({userPwd})}/>
              </View>
            </View>
            <View
              style={{
              alignItems: 'center',
              marginBottom: 10,
              flexDirection: 'row-reverse',
              marginLeft: 15
            }}>

              <CheckBox
                checkboxStyle={{
                width: 17,
                height: 17
              }}
                label='记住密码'
                onChange={(checked) => console.log('I am checked', checked)}/>
            </View>
            <View
              style={{
              marginLeft: 15,
              marginRight: 15
            }}>
              <Button
                onPress={() => {
                this.loginToMain();
              }}
                title="登录"
                color="#6495ED"/>
            </View>

          </View>

        </View>
      </KeyboardAwareScrollView>
    );

  }

}

/**
 * 将state,action绑定到props
 * var Main = state.Main;调用rootReducer中声明的reducer
 * return {LoginReducer}// 1.LoginReducer:LoginReducer，当key和value相同时，可省略key ==> es6（即可通过this.props.Main获取state中的状态值）
 * {main}// 2.注入action,即可调用action中声明的方法,（即可通过this.props.main获取,用于调用main中的方法）
 * LoginComponent// 3.将组件注入
 */
function select(store) {
  const {LoginReducer} = store;
  return {LoginReducer};
}
export default connect(select, {main})(LoginComponent)