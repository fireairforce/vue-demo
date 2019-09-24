<template lang="html">
  <div class="events">
      <!-- 在vue下面注册事件如何拿到原生对象 -->
     <button type="button" name="button" @click="msg('s',$event)">test</button>   
      <!--这里会出现一个冒泡的场景  -->
     <div class="parent" @click="parent">
        <p>parent</p>
        <p>parent</p>
        <p>parent</p>
        <div class="child" @click.stop="child">
           child
        </div>
     </div>
     <button type="button" name="button" @click="handleClick">点击 {{count}} +1</button>  
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0,
      count: 0
    };
  },
  methods: {
    msg: function(a, b) {
    //   b里面可以拿到原生的dom对象
      window.console.log(Math.random(), a, b);
    },
    parent: function(){
        window.console.log(`parent`);
    },
    child: function(){
        window.console.log(`child`);
    },
    handleClick: function(){
        this.count += 1
    }
  }
};
</script>

<style lang="css">
</style>