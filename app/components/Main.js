/*
 * @Describe: 导航页
 * @Author: lf
 * @Date: 2017-04-11 10:11:03
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-19 11:20:28
 */
import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {Text, View, Image, Platform, BackHandler} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

import MineComponent from './mine/MineComponent';
import MovieListComponent from './movie/MovieListComponent';
import MainMapComponent from './baidu_map/MainMapComponent';

import Icons from '../constant/Icons';
import styles from '../styles/MainStyle';

export default class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'Home'
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
      <TabNavigator>
        {this.renderNavigatorItem("Home", Icons.home, Icons.home, 'Home', MovieListComponent)}
        {this.renderNavigatorItem("Map", Icons.mine, Icons.mine, 'Map', MainMapComponent, 9)}
        {this.renderNavigatorItem("Mine", Icons.mine, Icons.mine, 'Mine', MineComponent)}
      </TabNavigator>
    );
  }

  /**
   * 导航item的封装
   * @param {*tab名称} title
   * @param {*tab图标} ioncUri
   * @param {*选中的tab图标} selectedIoncUri
   * @param {*选中的tab标识} selectedTab
   * @param {*包含的component} component
   */
  renderNavigatorItem(title, ioncUri, selectedIoncUri, selectedTab, showComponent, badgeText) {
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === selectedTab}
        title={title}
        badgeText={badgeText}
        renderIcon={() => <Image source={{
        uri: ioncUri
      }} style={styles.tabImg}/>}
        renderSelectedIcon={() => <Image source={{
        uri: selectedIoncUri
      }} style={styles.tabImg}/>}
        onPress={() => this.setState({selectedTab: selectedTab})}>

        <Navigator
          initialRoute={{
          component: showComponent
        }}
          configureScene={(route, routeStack) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
          renderScene={(route, navigator) => {
          _navigator = navigator;
          let Component = route.component;
          return <Component
            router={this.props.router}
            navigator={navigator}
            {...route.passProps}/>;
        }}/>
      </TabNavigator.Item>
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
