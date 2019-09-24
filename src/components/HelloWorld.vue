<template>
  <div class="hello">
    <!-- 这里渲染的是字符串 --> 
    <h1>{{ msg }}</h1>
     <!-- 这里渲染的是原生的html,同时有个动态的属性值 --> 
    <div v-html="msg1" v-bind="id"></div>
    <div>
     {{ number + 1 }}  
    </div> 
    <p v-if="seen">现在你又看得到我了</p>
    <p v-else>你又失败了</p>
    <div v-n="4">
    </div>
    <div>
      我借你{{money}}，你换我{{a}},还剩{{b}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      msg1:'<span style="color:red">Hello World</span>',
      id:'txt',
      number: 0,
      seen:true,
      money: 100,
      a:10
    }
  },
  computed:{
    b:function(){
      return this.money - this.a
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
