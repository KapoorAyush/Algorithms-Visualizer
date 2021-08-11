import SortingComponent from './Components/SortingComponent'
import GraphAlgos from './Components/GraphAlgos'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home></Home>
        {/* <GraphAlgos></GraphAlgos> */}
        {/* <SortingComponent></SortingComponent> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
