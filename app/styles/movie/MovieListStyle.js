import {StyleSheet} from 'react-native';

import Window from '../../utils/Dimension';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  directionRow: {
    flexDirection: 'row'
  },
  headView: {
    height: 200
  },
  headImage: {
    height: 200,
    width: width,
    justifyContent: 'flex-end'
  },
  headContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    margin: 15
  },
  headContainerImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center'
  },
  listStyle: {
    flexDirection: 'row', //改变ListView的主轴方向
    flexWrap: 'wrap', //换行
  },
  itemViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 90) / 3,
    height: (height - 385) / 3,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: '#fefefe'
  },
  itemImageStyle: {
    height: 40,
    width: 40
  },
  itemTextStyle: {
    fontSize: 16,
    color: '#343119',
    marginTop: 8
  }

});

export {styles as default}