import Vue from "vue";

Vue.directive("n", {
    // el是绑定元素的dom节点
  bind: function(el,binding) {
    // textContent是节点的内容属性,binding是节点的值  
    el.textContent = Math.pow(binding.value,2);
  },
  update: function(el,binding) {
    el.textContent = Math.pow(binding.value,2);
  },
});
