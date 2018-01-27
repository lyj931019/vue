<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <Row class="row">
      <Col xl="2" sm="12" md="6" lg="4" xs="12" v-for="(index) in items" :key="index">
        <div class="item" >{{index}}</div>
      </Col>
    </Row>
    <br><br><br><br><br>
    &nbsp;<Btn type="success" size="large" @click="handleClick">按钮</Btn>
    &nbsp;<Btn type="danger" >按钮</Btn>
    &nbsp;<Btn type="primary" shape="half">按钮</Btn>
    &nbsp;<Btn type="primary" shape="circle">按钮</Btn>
    &nbsp;<Btn type="warning" size="small">按钮</Btn>
    <Icon type="android-arrow-forward" style="font-size: 88px;"/>
    <Icon type="android-arrow-forward" style="color:#0093e4"/>
    <Icon type="videocamera" style="color:#0093e4"/>
  </div>

</template>

<script>
  import myComponent from '@/'
  export default {
    name: 'HelloWorld',
    components:myComponent,
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        items:[1,2,3,4,5,6],
        i:1
      }
    },
    methods:{
      handleClick(){
        console.log(this.i++);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
  .item.active{
  @include bgc($dark);
  }
  .item{
  @include bgc($info);
    height: 60px;
  }
  .row{
    height: 100px;
  }

</style>
