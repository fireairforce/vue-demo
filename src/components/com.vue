<template lang="html">
  <div class="com">
      child components
    <slot name="b"></slot>
      {{ name }}
      {{ age }}
      <button type="button" name="button" @click="patch">发送到父组件</button>
      <slot name="a"></slot>
  </div>
</template>

<script>
export default {
  props: ["age"],
  data() {
    return {
      name: "com"
    };
  },
  methods:{
    patch: function(){
      this.$emit('patch','wdlj');
    }
  }
};
</script>
<style>
</style>