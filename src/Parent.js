import React, {useRef, useState} from "react";
import Child from "./Child";
function Parent(){
    console.log("Hai")
    const refObj=useRef()
    const storeValue = useRef(0)
    const [value,setValue]=useState(10)
    // console.log("refObj",refObj.current)
    // console.log("storeValue",storeValue)
    const handleClick=()=>{
      storeValue.current=1000
      setValue(900)
    }
    console.log("storeValue",storeValue.current)
    return (
        <>
        <h1 ref={refObj}>Hello Parent</h1>
        <button onClick={()=>handleClick()}>Click</button>
        <p>Hello</p>
        <Child/>
        </>
    )
}
export default Parent;