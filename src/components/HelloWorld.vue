<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <Row>
      <Col xl="2" sm="12" md="6" lg="3">
        <div class="item" >123</div>
      </Col>
    </Row>
  </div>

</template>

<script>
  import myComponent from '@/'
  export default {
    name: 'HelloWorld',
    components:myComponent,
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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
