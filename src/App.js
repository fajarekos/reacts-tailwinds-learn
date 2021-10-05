import './App.css';
import Navbar from './components/Navbar';
import HookCounterArray from './components/HookCounterArray';
import DataFetching from './components/DataFetching';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HookCounterArray /> */}
      <DataFetching />
    </div>
  );
}

export default App;
