import ThirdChild from "./thirdChild";
function SecondChild() {
    return(
        <div>
            Second Child
            <div> <ThirdChild /> </div>
        </div>
    )
}
export default SecondChild;