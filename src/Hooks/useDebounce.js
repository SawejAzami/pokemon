
function useDebounce(cd,delay=1000){
    let timeId;
    return(...arg)=>{
        clearTimeout(timeId)
        timeId=setTimeout(()=>{
            cd(...arg)
        },delay)
    }
}
export default useDebounce