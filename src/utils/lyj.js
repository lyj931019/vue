export default {
  /*
  * 判断一个数是否undefined
  * 返回值：是--true ， 否--false
  * */
  isUndefined(value){
    //获得undefined，保证它没有被重新赋值
    var undefined = void(0);
    return value === undefined;
  }
}
