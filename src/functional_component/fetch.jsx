import { useEffect, useState } from "react";

function Getproducts(){
    const[products,setproducts]=useState([])
    const get_recipes=async()=>{
        const response = await fetch('https://food-restarent-backend.onrender.com/recipes/')
        const products = await response.json()
        setproducts(products.recipes)
    }
    // useEffect(function(){
    //     console.log("hello")
    //     get_recipes()
    // },[])
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