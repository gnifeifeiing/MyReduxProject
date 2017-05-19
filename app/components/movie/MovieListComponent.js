/*
 * @Describe: 登录
 * @Author: lf
 * @Date: 2017-04-25 14:16:22
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-16 17:58:18
 */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ListView
} from 'react-native';
import {connect} from 'react-redux';

import styles from '../../styles/movie/MovieListStyle';
import TitleBarView from '../../views/TitleBarView';

var data = require('../../json/MianList.json');

const img_arr = [
  require('../../images/instock_error.png'),
  require('../../images/net_search.png'),
  require('../../images/order_convert.png'),
  require('../../images/order_input.png'),
  require('../../images/order_manager.png'),
  require('../../images/order_signin.png'),
  require('../../images/stock_taking.png'),
  require('../../images/voyage_area_signin.png'),
  require('../../images/voyage_area_signin.png')
];

export default class MovieListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBarView navigator={this.props.navigator} text="退出"/>
        <View style={styles.headView}>
          <Image
            style={styles.headImage}
            resizeMode={Image.resizeMode.stretch}
            source={require('../../images/main_head.png')}>
            <View style={styles.headContainer}>
              <Image
                style={styles.headContainerImage}
                source={require('../../images/search.png')}/>
              <TextInput
                style={{
                flex: 1
              }}
                placeholder='搜索'
                underlineColorAndroid='transparent'></TextInput>
              <Image
                style={styles.headContainerImage}
                source={require('../../images/scan.png')}/>
            </View>
          </Image>
        </View>
        <View
          style={{
          backgroundColor: '#dde4fa',
          flex: 1
        }}>
          <ListView
            dataSource={this
            .state
            .dataSource
            .cloneWithRows(data)}
            renderRow={this.renderRow}
            contentContainerStyle={styles.listStyle}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}/>
        </View>
      </View>
    );
  }

  //返回Item试图
  renderRow(rowData, sectionId, rowId, hItemId) {
    return (
      <TouchableHighlight
        underlayColor='#77a1f7'
        style={styles.itemViewStyle}
        onPress={() => {}}>
        <View style={styles.itemViewStyle}>
          <Image source={img_arr[rowId]} style={styles.itemImageStyle}/>
          <Text style={styles.itemTextStyle}>{rowData.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}