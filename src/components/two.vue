<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {useMousePosition} from '../Composables/useMousePosition'
const {x,y} = useMousePosition();
</script>
<template>
  <div>
    <h1>two</h1>
    X={{x}}
    Y={{y}}
  </div>
</template>
<style scoped>
</style>
