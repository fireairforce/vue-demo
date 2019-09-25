<template>
  <div id="app">
    <HelloWorld msg="<span style='color:red;'>Hello world</span>" />
    <ev />
    <!-- 传静态的props是写死的，动态的是活的 -->
    <com :age="age" @patch="msg" >
       <h1 slot="a">我要加东西在组件下面</h1>
       <h2 slot="b">那我要加在里面</h2>
    </com>  
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ev from "./components/events.vue";
import com from "./components/com";
import "./components/n";

export default {
  name: "app",
  components: {
    HelloWorld,
    ev,
    com
  },
  data() {
    return {
      age: 18
    };
  },
  methods: {
    msg: function(b) {
      window.console.log(b);
      this.age += 1;
    }
  }
};
</script>

<style>
</style>
