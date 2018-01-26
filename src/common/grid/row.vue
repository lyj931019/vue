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
  import Col from './col.vue'
  export default {
    components: {
      Col
    },
    name:'Row',
    data(){
      return {
        items:[
          {content:1},
          {content:2},
          {content:3},
          {content:4},
          {content:5},
        ]
      }
    }
  }
</script>
