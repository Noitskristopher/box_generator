import './App.css';
import BoxGenerator from './components/BoxGenerator';
import DisplayBox from './components/DisplayBox';
import { useState } from 'react';

function App() {
  const [boxGenList, setBoxGenList] = useState([])
  return (
    <div className="App">
      <BoxGenerator boxGenList={boxGenList} setBoxGenList={setBoxGenList} />
      <DisplayBox boxGenList={boxGenList} />
    </div>
  );
}

export default App;
