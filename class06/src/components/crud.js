function CRUD() {
var contentOfPTag = "Learn React js if conditions in return from variable"
    return (
        <div>

            {/* {
                if(){

                }
                else{

                }
            } */}

            {
                true ?

                    <p>
                       {contentOfPTag}
                   </p>
                    :
                    <p>
                        Learn React js else conditions in return
                    </p>

            }

        </div>

    )
}

export default CRUD;

// conditional Rendering

// if we want to print js variable into simple HTML
// 1- getElimentByid , 2- innerHTML = variable