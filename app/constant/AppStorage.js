/*
 * @Describe: app持久化存储
 * @Author: lf
 * @Date: 2017-05-13 11:49:42
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-13 11:50:50
 */
import React, {AsyncStorage} from 'react-native';

class AppStorage {

  static IS_LOGIN = "IS_LOGIN"; //是否登录

  /**
     * 获取
     * @param key
     * @returns
     */

  static get(key) {
    return AsyncStorage
      .getItem(key)
      .then((value) => {
        const jsonValue = JSON.parse(value);
        return jsonValue;
      });
  }

  /**
     * 保存
     * @param key
     * @param value
     * @returns
     */
  static set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  /**
     * 更新
     * @param key
     * @param value
     * @returns
     */
  static update(key, value) {
    return DeviceStorage
      .get(key)
      .then((item) => {
        value = typeof value === 'string'
          ? value
          : Object.assign({}, item, value);
        return AsyncStorage.setItem(key, JSON.stringify(value));
      });
  }

  /**
     * 更新
     * @param key
     * @returns
     */
  static delete(key) {
    return AsyncStorage.removeItem(key);
  }
}

export default AppStorage;