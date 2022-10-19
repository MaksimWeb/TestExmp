import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Form } from './components/Form';
import { MyChart } from './components/Chart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Form />
      <MyChart />
    </div>
  );
}

export default App;
