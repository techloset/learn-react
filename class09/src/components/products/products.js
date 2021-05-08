import {useFetchProducts} from "./useFetchProducts";

function Products(params) {
const [products,loading] = useFetchProducts()

// start of views / user view
console.log("products",products);
 if(loading){
     return <div> <p>loading ...</p></div>
 }
  return (<div>

        {products.map((product, index)=> {
            return(<div>
                 <p>{product.title}</p>
                <img  style={{width:50}} src={product.image} alt={product.category} />
                 <p>category: {product.category}</p>
                <p> price{product.price}</p>
                <hr/>
            </div>)
        })}

         </div>);
}
// end of views
export default Products;
