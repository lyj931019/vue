<style lang="scss" scoped>
  /*========================================*/
  /* switch 开关的样式 */
  /*========================================*/
  .lwitch{
    display: inline-block;
    width: 45px;
    height: 24px;
    border-radius: 46px;
    position: relative;
  @include bgc($subColor);
    transition: all .2s linear;
    color: #fff;
  .round-dot.open{
    left: 23px;
  }
  .round-dot{
    border-radius: 50%;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 2px;
    left: 2px;
  @include bgc(#fff);
    transition: all .2s linear;
  }
  }
  .lwitch.open{
  @include bgc($primary);
  }
  .lwitch.large{
    width: 55px;
    height: 30px;
  .round-dot{
    height: 26px;
    width: 26px;
  }
  .round-dot.open{
    left: 27px;
  }
  }
  .lwitch.small{
    width: 35px;
    height: 17px;
  .round-dot{
    height: 13px;
    width: 13px;
  }
  .round-dot.open{
    left: 20px;
  }
  }

</style>

<template>
  <span :class="classes" @click="toggle">
    <span class="round-dot" :class="{open:isOpen}"></span>
    <!-- 想要支持已定义输入,未完成 ,字太小，意义不大 -->
  </span>
</template>

<script>
  import _ from '@/utils/lyj.js';
  const prefixCls = 'lwitch';
  export default {
    name : 'l-switch',
    props:{
      size: {
        validator (value) {
          return _.oneOf(value, ['small','large']);
        }
      },
      open:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        isOpen:false
      }
    },
    methods:{
      toggle(){
        this.isOpen = !this.isOpen;
        this.$emit('l-switch-change', this.isOpen);
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${this.size}`]: !!this.size,
            'open':this.isOpen
          }
        ];
      }
    },
    beforeMount(){
      this.isOpen = this.open;
    }
  }
</script>

<style lang="scss" scoped>

</style>
