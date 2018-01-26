<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <Row>
      <Col xl="2" sm="12" md="6" lg="4" xs="12" v-for="(index) in items" :key="index">
        <div class="item" >{{index}}</div>
      </Col>
    </Row>
    <Btn type="primary">按钮</Btn>
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
        items:[1,2,3,4,5,6]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
