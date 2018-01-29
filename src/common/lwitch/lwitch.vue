<template>
  <span class="lwitch" :class="{open:isOpen}" @click="toggle">
    <span class="round-dot" :class="{open:isOpen}"></span>
    <!-- 想要支持已定义输入,未完成 -->
    <!--<slot name="open" v-if="isOpen === true"></slot>-->
    <!--<slot name="close" v-if="isOpen === false"></slot>-->
  </span>
</template>

<script>
  export default {
    name : 'l-switch',
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
    }
  }
</script>

<style lang="scss" scoped>
  .lwitch{
    display: inline-block;
    width: 55px;
    height: 30px;
    border-radius: 46px;
    position: relative;
    @include bgc($subColor);
    transition: all .2s linear;
    color: #fff;
    .round-dot.open{
      left: 27px;
    }
    .round-dot{
      border-radius: 50%;
      height: 26px;
      width: 26px;
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

</style>
