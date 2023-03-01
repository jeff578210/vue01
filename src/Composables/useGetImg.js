import { reactive, ref } from "vue";
import axios from "axios";
// 輸入一個值可以透過setData改變data
export function useGetImg() {
    const data = ref('');
    const datas = reactive ([]);
    const getdata = async (userid) => {
        try {
            const res = await axios.get(`http://localhost:3001/getoneimg/${userid}`);
            console.log(res.data[0].imgg.data);
            var u8Arr = new Uint8Array(res.data[0].imgg.data);
            var blob = new Blob([u8Arr], { type: "image/jpeg" });
            var fr = new FileReader;
            fr.onload = function () {
                data.value = fr.result
            };
            fr.readAsDataURL(blob);
        } catch (error) {
            console.error(error);
        };
    }
    const getdatas = async ()=>{
        try{
            const res = await axios.get('http://localhost:3001/getimgs');
            console.log(res.data[0].imgg.data);
            for (let i = 0; i < res.data.length; i++) {
                var u8Arr = new Uint8Array(res.data[i].imgg.data);
                var blob = new Blob([u8Arr], { type: "image/jpeg" });
                var fr = new FileReader;
                fr.readAsDataURL(blob);
                fr.onload = function (e) {
                    datas.push(e.target.result);
                };
            }

        }catch (error) {
            console.error(error);
        };
    }
    return {
        data,
        getdata,
        datas,
        getdatas,
    }
}