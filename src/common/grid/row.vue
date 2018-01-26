<style lang="scss">
  .row{
    width: 100%;
    @include bgc($danger);
    @include ieBox($blue,5px);
    height: 100px;
  }
  .item.active{
    @include bgc($dark);
  }
  .item{
    @include bgc($info);
    height: 60px;
  }
</style>

<template>
  <div class="row clear">
    <!--这里添加Col-->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'Row',
    data(){
      return {

      }
    }
  }
</script>
