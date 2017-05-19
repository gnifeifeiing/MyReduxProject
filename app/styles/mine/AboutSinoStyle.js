import {StyleSheet} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde4fa',
    alignItems: 'center'
  },
  containerImageHead: {
    height: 70,
    width: width - 50,
    marginTop: 15
  },
  containerTextHead: {
    color: '#cccccc',
    fontSize: 22
  },
  containerTextHeadSmall: {
    color: '#cccccc',
    fontSize: 16
  },
  viewUnderLine: {
    height: 1,
    backgroundColor: 'red',
    margin: 20
  }
});

export default styles;