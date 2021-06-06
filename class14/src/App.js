import './App.css';
import UpdateRedux from './components/reduxtest';
import useApp from "./useApp";
function App() {
const [loader] = useApp();

  return (
    <div className="App">
      <p>App running</p>
      <UpdateRedux />
    </div>
  );
}

export default App;
