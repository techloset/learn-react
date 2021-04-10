import Button1 from "./button1";
function Button(props) {
    // console.log("props", props);
  return (
    <div >
        <Button1 data={props.data} />
     <button>Learn Reactjs</button>
    </div>
  );
}

export default Button ;