import './App.css';
import Header from "./components/header";
import { Footer } from "./components/footer";
import Home from "./components/home";
import BasicState from "./components/basicState";

var newData = {
  stuName:'naveed',
  batch:3
}


var onlyArray = [1,2,3]

var onlyString = "some of props"

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BasicState />
  
{/*      
       <Home data={onlyArray} />
       <Header /> */}
{/* 
       <Header />

       <Header />

       <Header />

       <Header />

       <Header />   */}
{/*        
       <Header />

       <Header />

       <Footer /> */}

      </header>
    </div>
  );
}

export default App;

// component?
// nested component? 
// states of component?
// props in components?

// import 
// export
