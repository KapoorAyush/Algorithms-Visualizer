import SortingComponent from './Components/SortingComponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        Hello
        <SortingComponent></SortingComponent>
      </div>
    </BrowserRouter>

  );
}

export default App;
