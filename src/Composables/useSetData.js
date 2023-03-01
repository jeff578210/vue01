import { ref,readonly } from "vue";
// 輸入一個值可以透過setData改變data
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
