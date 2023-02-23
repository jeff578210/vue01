import { defineStore } from "pinia";
import { computed, ref } from 'vue';
export const useCounterStore =defineStore("counter",()=>{
    const counter =ref(0);
    const addCount=()=>{
        counter.value++;
    }
    const doubleCount=computed(()=>{
        return counter.value*2
    })
    return {
        counter,
        addCount,
        doubleCount,

    }
})