<style lang="scss" scoped>

</style>

<template>
  <label class="">
    <input type="radio" class="rdo" :name="name">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name:'radio',
    props:{
      name:{
        type:String
      }
    },
    data(){
      return {

      }
    }
  }
</script>
