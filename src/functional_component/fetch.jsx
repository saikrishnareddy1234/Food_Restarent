import { useState } from "react";

function Getproducts(){
    const[products,setproducts]=useState([])
    const get_recipes=async()=>{
        const response = await fetch('http://127.0.0.1:8000/recipes/')
        const products = await response.json()
        setproducts(products.recipes)
    }
    return <div>
        <div><button onClick={get_recipes}>Get Products</button></div>
        {
            products.length>0?
            products.map((each)=><img style={{width:'200px'}} src ={each.image}/>)
            :
            "data loading"
        }
        </div>
}
export default Getproducts