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
    <!-- 使用v-bind为之添加class属性，加两个属性值 -->
    <div :class="[a1,a2]">
      我借你{{money}}，你换我{{a}},还剩{{b}}
    </div>
    <!-- 当a3为true才有test-1类名，否则没有 -->
    <div :class="{'test-1':a3}">
       style object
    </div>
    <div :class="obj">
        style obj
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="item">
        {{ item }},{{ index }}
      </li>
    </ul>
    <ul>
      <template v-for="item in list">
        <li :key="item + 1">Hello</li>
        <li :key="item">
           {{ item }}
        </li>
      </template>
    </ul>
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
      a:10,
      a1:"test-1",
      a2:"test-2",
      a3:true,
      obj: {
        'test-1':true,
        'test-2':true
      },
      list:['a','b','c','d']
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
