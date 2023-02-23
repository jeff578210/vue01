<script setup>
import { ref,onMounted } from "vue";
import {useCounterStore} from '../stores/counter.js';
import { storeToRefs } from "pinia";
const CounterStore = useCounterStore();
// 使用useCounterStore這個store
const {addCount} =CounterStore;
// 重新包裝
const {counter} = storeToRefs(CounterStore);
// 重新包裝這樣就不用每個變數前面都加CounterStore.
const clickAdd = ()=>{
    addCount();
}
CounterStore.$subscribe((mutation,state)=>{
    console.log(state)
})
</script>
<template>
<div>
    <h1>第B頁</h1>
    <h2>{{counter}}</h2>
    <button @click="clickAdd">click</button>
</div>
</template>
<style scoped>

</style>