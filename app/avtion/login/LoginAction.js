/*
 * @Describe: 登录请求
 * @Author: lf
 * @Date: 2017-05-13 10:41:51
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-15 13:53:51
 */
import * as Types from '../../constant/ActionTypes';
import * as ActionUrl from '../../constant/ActionUrl';
import HttpUtil from '../../utils/HttpUtil';
// let 声明的名称会在界面使用
export let main = (params) => {

  return dispatch => {

    // 1.发出拉取数据的信号
    dispatch({type: Types.LOGIN_ISLOADING});

    // 2.请求网络
    return HttpUtil.fetchGet(ActionUrl.LOGIN_URL, params, (responseObj) => {
      dispatch({type: Types.LOGIN_OVER, result: responseObj});
      console.info("success");
    }, (error) => {
      dispatch({type: Types.LOGIN_ERROR, e: error});
      console.info("error" + error);
    })

  }

}
