<template>
  <button @click="add">click</button>
</template>

<script setup>
const emit = defineEmits(["num"]);
const add =()=>{
    emit("num",3+4);
}
</script>

<style>

</style>