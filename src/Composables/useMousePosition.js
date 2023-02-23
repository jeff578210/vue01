import { ref, onMounted, onUnmounted,readonly } from "vue";
export function useMousePosition(){
    const x = ref(0);
    const y = ref(0);
    const mouseposition = (e) => {
      x.value = e.pageX;
      y.value = e.pageY;
    };
    onMounted(() => {
      window.addEventListener("mousemove", mouseposition);
    });
    onUnmounted(()=>{
        window.removeEventListener("mousemove", mouseposition);
    })
    return {
        x:readonly(x),
        y
    }
}
