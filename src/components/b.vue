<template>
<div>
  <div class="b">
      pages b {{ $store.state.count.count }}
  </div>
  <button type="button" name="button" @click="add(2)">增加数量</button>
  <button type="button" name="button" @click="reduce">减少数量</button>
</div>  
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: mapActions('count',[
    "add",
    "reduce"
  ])
}
</script>

<style>

</style>