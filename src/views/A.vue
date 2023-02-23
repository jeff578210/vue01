<script setup>
import { ref, onMounted } from "vue";
import { useSetData } from "../Composables/useSetData.js";
const {data,setData} = useSetData();
const add =()=>{
    setData(4)
}
</script>
<template>
  <div>
    <h1>第A頁</h1>
    data={{data}}
    <button @click="add">增加data</button>
  </div>
</template>
<style scoped>
</style>