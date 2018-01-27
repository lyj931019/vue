按钮 : 暂只支持点击事件
        可以直接添加class或style改变其样式
属性:{
  type:{
    effect: 改变按钮的默认样式,
    value:{
      primary : 蓝色,
      danger : 红色,
      warning : 黄色,
      success :绿色,
      info : 浅蓝,
      text : 取消边框,
      default : 白色,默认,不用写,写了也白写
    }
  },
  size:{
    effect :改变按钮的尺寸,改变的是内边距,
    value :{
      small :小,
      large :大,
      default : 默认,不用写,写了也白写
    }
  },
  shape:{
    effect : 改变按钮的圆角,
    value :{
      half : 半圆角,radius-5px
      circle : 圆角,radius-32px,
      default :直角,默认,不用写,写了也白写
    }
  },
  long:{
    effect : 改变按钮的display方式,即是否充满整行
    value : {
      true : display:block,占满整行,
      false : display:inline-block,正常的按钮,默认,不用写,写了也白写
    }
  }
}
