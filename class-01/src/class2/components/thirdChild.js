import Button from "./button";
var someValue = "data";
function ThirdChild() {
    return(
        <div>
            <Button data={someValue} color="green" title="Learn HTML" />
            {/* <Button /> */}
       </div>
    )
}
export default ThirdChild;

// props