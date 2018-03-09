# 计算属性
与定义为一个方法，实现的结果相同
## 不同
+ 计算属性是基于它们的依赖进行缓存的
  * 计算属性只有在它的相关依赖发生改变时才会重新求值
  * message 未发生改变,多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数
  * 如下例，变量message没有发生改变，reversedMessage不会重新计算
+ 每当触发重新渲染时，调用方法将总会再次执行函数
## 例：
``` 
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
``` 
``` 
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
``` 
