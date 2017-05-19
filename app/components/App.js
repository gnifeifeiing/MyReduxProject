/**
 * App
 * Songlcy create by 2017-01-10
 */
import React, {Component} from 'react';
import {Text, BackHandler, Platform} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import AppStorage from '../constant/AppStorage';
import LoginComponent from '../components/login/LoginComponent';

let _navigator = null; //作为键盘返回键导航

let initialRoute = {
  component: LoginComponent
}

export default class App extends Component {

  constructor(props) {
    super(props);

    AppStorage.set(AppStorage.IS_LOGIN, false);
    if (AppStorage.get(AppStorage.IS_LOGIN)) {
      initialRoute = {
        component: LoginComponent
      }
    }

  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={(route, navigator) => {
        _navigator = navigator;
        let Component = route.component;
        return <Component {...route.params} navigator={navigator}/>
      }}
        configureScene={(route) => Navigator.SceneConfigs.PushFromRight}/>
    );
  }

  onBackAndroid = () => {
    const nav = _navigator;
    if (nav) {
      const routers = nav.getCurrentRoutes();
      if (routers.length > 1) {
        nav.pop();
        return true;
      }
    }
    return false;
  }
}
