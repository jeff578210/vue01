<script setup>
    const props = defineProps({
        username:{
            type:String,
            default:'',
        },
        changename:{
            type: Function,
            default:()=>{},
        }
    })
</script>
<template>
  <button @click="props.changename('jacky')">{{props.username}}</button>
</template>


<style>

</style>