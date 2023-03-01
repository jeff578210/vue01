<template>
<div>
    <input type="text" v-model="id">
    <button @click="aa(id)">獲取圖片</button>
    <button @click="getdatas">獲取多張圖片</button>
    <img v-if="data" :src="data" alt="">
    <img v-for="val in datas" :src="val" alt="" :key="val">

</div>

</template>

<script setup>
    import {useGetImg} from "../Composables/useGetImg.js";
    import { ref } from "vue";
    const {data,datas,getdata,getdatas} = useGetImg();
    const id = ref (0);
    const aa = (e)=>{
        getdata(e);
    }
</script>

<style>

</style>