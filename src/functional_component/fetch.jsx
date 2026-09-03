import { useState } from "react";

function Getproducts() {
    const[products,setproducts]=useState([])
    async function getproducts() {
        const response = await fetch('http://127.0.0.1:8000/recipes/')
        const data = await response.json()
        setproducts(data.recipes)
    }
    return <div>
        <div><button onClick={getproducts}>Get Products</button></div>
        {
            products.length>0?
            products.map((each)=><img style={{width:'200px'}} src ={each.image}/>)
            :
            "data loading"
        }
        </div>
}
export default Getproducts