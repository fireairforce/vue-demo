<template>
<div>
  <div class="a">pages a {{$store.state.money.money}}</div>
  <button type="button" name="button" @click="add">增加money</button>
  <button type="button" name="button" @click="reduce">减少money</button>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
   methods: mapActions('money',[
     'add',
     'reduce'
   ])
};
</script>

<style>
</style>