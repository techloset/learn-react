import {useDispatch} from "react-redux"; 
import {updateLoader, fetchProducts} from "../store/actions/ProductActions";
import OneMoreComponent from './OneMoreComponent'

function UpdateRedux() {

    const dispatch = useDispatch();
 
    const ctaHandler = ()=> {
        console.log("call to action in component passing value naveed-rana");
        // dispatch(updateLoader(true))
        dispatch(fetchProducts("naveed-rana"))
    }
    return (
    <div>
        <button onClick={ctaHandler}>update loader key in product reducer</button>
        <OneMoreComponent />
    </div>
    )
}

export default UpdateRedux;