<script setup>
import { ref, onMounted } from "vue";
const props = defineProps(["src"]);
</script>
<template>
  <div class="div1">
    <img class="img" :src="props.src" />
  </div>
</template>
<style scoped>
.div1 {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid black;
  align-items: center;
  text-align: center;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>