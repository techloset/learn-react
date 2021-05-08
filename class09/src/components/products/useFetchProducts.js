import { useState, useEffect } from "react";
import axios from "axios";
// import {fetchProducts} from "./api";

export function useFetchProducts() {

    // logics
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false);
//   end of logics 

// // using fetch built js network handler
// async function fetchProducts() {
//     let productsRes = await fetch('https://fakestoreapi.com/products');
//     let products = await productsRes.json()
//     setProducts(products)
//     // console.log("products",await productsRes.json());
// }


//
// using fetch built js network handler
async function fetchProducts() {
    try{
        setLoading(true)
        let products = await axios.get('https://fakestoreapi.com/products/category/jewelery')
        console.log("products",products.data);
       setProducts(products.data)
    }
    catch(err){
     console.log("error", err)
    }
    finally{
        setLoading(false)
    }
    // console.log("products",await productsRes.json());
}


useEffect(() => {
    
fetchProducts()
}, [])


// return logics
  return [products,loading]
}
// end of views
