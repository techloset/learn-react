// import Counter from "./components/counter1";
import Counter from "./components/counter";

function App() {
  const sampleData = {
    color:"red",
    title:"Learn Reactjs",
    width:"50"
  }
  const sampleData1 = ["1","2","3","2"]
  const sampleData2 = "Sample String"
  const sampleData3 = 10;
  return (
    <div className="App">
      <Counter  />
      {/* <Counter sampleData={sampleData} sampleData1={sampleData1} sampleData2={sampleData2} sampleData3={sampleData3}  /> */}
    </div>
  );
}

export default App;

// props
// if we want to pass data from parent component to child component we need to use concept called props
