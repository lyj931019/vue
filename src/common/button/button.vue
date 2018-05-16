<style lang="scss" scoped>
  /*========================================*/
  /* 按钮样式库 */
  /*========================================*/
  .btn{
    display: inline-block;
    padding: 0.2em 0.8em;
    @include ieBox;
    cursor:pointer;
    text-align: center;
    @include bgc($default);
    color:$content;
  }
  .btn:hover{
    color: $primary;
    border-color: $primary;
  }
  /* size:大小，改变内边距*/
  .btn.btn-large{
    padding: 0.4em 0.9em;
  }
  .btn.btn-small{
    padding: 0.1em 0.5em;
  }
  /* long: block占满整行*/
  .btn.btn-long{
    display: block;
    width: 100%;
  }
  /* type:样式类型，改变颜色 */
  .btn.btn-primary{
    @include bgc($primary);
    border-color: $primary;
  } //primary
  .btn.btn-primary:hover{
    @include bgc($lightPrimary);
  } // primary:hover
  .btn.btn-info{
    @include bgc($info);
    border-color: $info;
  } //info
  .btn.btn-info:hover{
    @include bgc(#57c5f7);
  } // info:hover
  .btn.btn-success{
    @include bgc($success);
    border-color: $success;
  } // success
  .btn.btn-success:hover{
    @include bgc(#47cb89);
  } //success:hover
  .btn.btn-warning{
    @include bgc($warning);
    border-color: $warning;
  }// warning
  .btn.btn-warning:hover{
    @include bgc(#ffad33);
  }// warning:hover
  .btn.btn-danger{
    @include bgc($danger);
    border-color: $danger;
  }// danger
  .btn.btn-danger:hover{
    @include bgc(#f16543);
  }// danger:hover
  // 统一设置字体为白色
  .btn.btn-primary,
  .btn.btn-info,
  .btn.btn-success,
  .btn.btn-warning,
  .btn.btn-danger{
    color:$default;
  }
  /* type：text 去掉边框和背景颜色*/
  .btn.btn-text{
    border:0;
    @include bgc;
    color: $content;
  }
  /* 半圆角 : halfcircle*/
  .btn.btn-half{
    border-radius:5px;
  }
  /* 圆角 : circle*/
  .btn.btn-circle{
    border-radius:32px;
  }
  .btn:disabled{
    border: 1px solid #DDD;
    background-color: #F5F5F5;
    color:#ACA899;
    cursor: not-allowed;
  }
  .btn:disabled:hover{
    border: 1px solid #DDD;
    background-color: #F5F5F5;
    color:#ACA899;
    cursor: not-allowed;
  }
</style>

<template>
  <button :class="classes" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  import _ from '@/utils/lyj.js'
  const prefixCls = 'btn';
  export default {
    name:'btn',
    props:{
      type: {
        validator (value) {
          return _.oneOf(value, ['primary', 'text', 'info', 'success', 'warning', 'danger']);
        }
      },
      size: {
        validator (value) {
          return _.oneOf(value, ['small','large']);
        }
      },
      shape: {
        validator (value) {
          return _.oneOf(value, ['half','circle']);
        }
      },
      long: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-long`]: this.long,
            [`${prefixCls}-${this.shape}`]: !!this.shape,
            [`${prefixCls}-${this.size}`]: !!this.size,
          }
        ];
      }
    },
    /*
    * 放弃这种写法了( ▼-▼ )，留个纪念
    created(){
      !this._.isUndefined(this.type) && this.classes.push('btn-'+this.type);// 是否定义了type
      !this._.isUndefined(this.long) && this.classes.push('btn-'+this.long);// 是否定义了long
      !this._.isUndefined(this.size) && this.classes.push('btn-'+this.size);// 是否定义了size
      !this._.isUndefined(this.shape) && this.classes.push('btn-'+this.shape);// 是否定义了shape
    },
    */
    methods:{
      handleClick (event) {
        this.$emit('click', event);
      }
    }

  }
</script>
