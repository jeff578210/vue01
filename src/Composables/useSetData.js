import { ref,readonly } from "vue";
export function useSetData(){
    const data = ref(0);
    const setData =(data2)=>{
        data.value=data2;
    }
    return {
        data:readonly(data),
        setData
    }
}
