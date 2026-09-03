import { useState } from "react"

function Counter(){
    let a=useState(0)
    const increment=()=>{
        a[1](a[0]+1)
    }
    const decrement=()=>{
        a[1](a[0]-1)
    }
return <div style={{display:'flex',justifyContent:'center',height:'100vh',alignItems:'center'}}>
        <button style={{width:'80px',height:'50px',backgroundColor:'green',color:'white',cursor:'pointer',borderRadius:'8px',border:'none'}} onClick={increment}>+</button>
        <p style={{margin:'8px'}}>{a[0]}</p>
        <button style={{width:'80px',height:'50px',backgroundColor:'red',color:'white',cursor:'pointer',borderRadius:'8px',border:'none'}} onClick={decrement}>-</button>
       </div>
}
export default Counter