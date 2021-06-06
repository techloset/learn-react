import {useSelector} from 'react-redux'
function OneMoreComponent() {

    const state = useSelector(store => store.products.loader)
    console.log("OneMoreComponent loader state from product reducer", state );

    return (
        <div>
            New COmponent
        </div>
    )
}

export default OneMoreComponent;