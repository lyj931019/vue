<style lang="scss">
  .col{
    float: left;
    position: relative;
    @include fc($default);
    font-size:2em;
  }
</style>

<template>
  <div class="col" :class="sizes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'myCol',
    props: ['xs','sm','md','lg','xl'],
    data(){
      return {
        sizes:[]
      }
    },
    created(){
      if(!(this.xs === undefined)){
        this.sizes.push('col-xs-'+this.xs)
      }
      if(!(this.sm === undefined)){
        this.sizes.push('col-sm-'+this.sm)
      }
      if(!(this.md === undefined)){
        this.sizes.push('col-md-'+this.md)
      }
      if(!(this.lg === undefined)){
        this.sizes.push('col-md-'+this.lg)
      }
      if(!(this.xl === undefined)){
        this.sizes.push('col-xl-'+this.xl)
      }
      console.log(this.xl);
    }
  }
</script>
