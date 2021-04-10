import Button from "./button";
function Counter1(props) {
//   const sampleData = {
//     color:"red",
//     title:"Learn Reactjs",
//     width:"50"
//   }
//   const sampleData1 = ["1","2","3","2"]
//   const sampleData2 = "Sample String"
//   const sampleData3 = 10;
  return (
    <div className="App">
        counter component
     <Button data={props.sampleData}  />
     <Button data1={props.sampleData1}  />
     <Button data2={props.sampleData2}  />
     <Button data3={props.sampleData3}  />
    </div>
  );
}

export default Counter1;

// pass data from app.js to counterjs as props
// forward those props as props from counterjs to buttonjs