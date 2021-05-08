import logo from './logo.svg';
import './App.css';
import MethodsInClass from "./components/lifeCycleMethodsinClass";
import LifeCycleInHooks from './components/lifeCycleMethodInHooks';
import Dashboard from './components/dashboard/dashboard';
import Products from './components/products/products';


function App() {
  return (
    <div className="App">
     {/* <LifeCycleInHooks/> */}
     {/* <Dashboard/> */}
     <Products/>
    </div>
  );
}

export default App;
