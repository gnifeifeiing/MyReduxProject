/*
 * @Describe: 数值工具类
 * @Author: lf
 * @Date: 2017-05-13 10:30:26
 * @Last Modified by:   lf
 * @Last Modified time: 2017-05-13 10:30:26
 */
let NumberUtil = {

  // 根据范围值产生随机数
  getRandom: (minNum, maxNum) => {
    var range = maxNum - minNum;
    var rand = Math.random();
    var result = minNum + Math.round(range * rand);
    return result;
  }

}

export default NumberUtil;