import './App.css';
import DataFetching from './components/DataFetching';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="w-4/5">
        <DataFetching />
      </div>
    </div>
  );
}

export default App;
