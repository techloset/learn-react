import Child from "./child";
import Button from "./button";
function Parent() {
  return (
    <div>
      Parent Component
      <div>
        <Child />
      </div>
      <Button color="red" title="HTML Tags"/>
    </div>
  );
}
export default Parent;
// props
// if we want to share any data from parent component to child component we need to use concept named props

