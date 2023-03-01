<script setup>
import { ref,onMounted } from "vue";
import {useCounterStore} from '../stores/counter.js';
import { storeToRefs } from "pinia";
import { useRouter ,RouterLink} from 'vue-router';
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
// 3秒後跳轉
const router = useRouter()
const three =()=>{
    setTimeout(()=>{
        router.push("/two")
    },3000)
}
</script>
<template>
<div>
    <h1>第B頁</h1>
    <h2>{{counter}}</h2>
    <button @click="clickAdd">click</button>
    <h1>RouterLink變動網址</h1>
    <routerLink to="/bb/water" class="z">water</routerLink>
    <routerLink to="/bb/food" class="z">food</routerLink>
    <routerLink to="/bb/3c" class="z">3c</routerLink>
    <router-view/>
    <h1>三秒後跳轉</h1>
    <button @click="three">跳</button>
</div>
</template>
<style scoped>
.z{
    margin: 20px;
}
</style>