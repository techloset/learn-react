// class01
// import Header, {Footer, Foo÷ter2} from './components/header'
// import Header from './components/header'
// import Footer from './components/footer'
// import Header from "./class1/components/header/index"
// import Footer from "./class1/components/footer/index"
// import Sections from "./class1/components/section"
// import "./App.css"

// classO2
import Parent from "./class2/components/parent";

function App() {
  return (
    <div >
      <Parent />
    {/* <Header />
    <Sections/>
    <Footer /> */}
   </div>
  );
}

export default App;

// Things to remember while converting your HTML + CSS into React.js
// import css file > import "path/file.name"
// import images > import imagename from "path"
// change your css class keyword into className
// every tag should self closed