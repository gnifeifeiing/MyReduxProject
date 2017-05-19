/*
 * @Describe: 网络请求工具类
 * @Author: lf
 * @Date: 2017-05-13 10:30:47
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-17 10:37:08
 */

let HttpUtil = {

  /**
     * Get請求，沒有參數傳null
     */
  fetchGet: (url, params, successCallback, failCallback) => {

    // 1.拼接參數 url += "?key=46439e22fab73b5274b6e3c8db0f11fe";

    if (params) {
      var paramsBody = Object
        .keys(params)
        .reduce((a, k) => {
          a.push(k + "=" + encodeURIComponent(params[k]));
          return a;
        }, [])
        .join('&');
      url += "&" + paramsBody;
    }
    console.info(url);
    fetch(url, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    }).then((response) => {
      return response;
    }).then((responseObj) => {
      successCallback(responseObj)
    }).catch((error) => failCallback(error));
  },

  /**
     * POST請求
     */
  fetchPost: (url, params, successCallback, failCallback) => {

    // 1.拼接參數
    var paramsBody = Object
      .keys(params)
      .reduce((a, k) => {
        a.push(k + "=" + encodeURIComponent(obj[k]));
        return a;
      }, [])
      .join('&');
    // 2.發送請求
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      body: paramsBody + "&key=46439e22fab73b5274b6e3c8db0f11fe"

    }).then((response) => response.json()).then((responseObj) => successCallback(responseObj)).catch((error) => failCallback(error));
  }
}

export default HttpUtil;
