<template lang="html">
  <div class="vuex">
      <!-- 这个state相当于组件里面的data部分 -->
      vuex {{ $store.state.count }}
      <button type="button" name="button" @click="increment">增加</button>
      <button type="button" name="button" @click="decrement">删除</button>
  </div>
</template>

<script>
// 做了一次关联
import { mapActions } from "vuex";
export default {
  methods: mapActions([
      'increment',
      'decrement'
  ])
}
</script>

<style lang="css">

</style>