import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const [menu, setMenu] = useState([true, false, false]);

  const menuRender = (e) => {

    const { target:{ id } } = e;
  
    if(id === '0')      setMenu([true, false, false]);
    else if(id === '1') setMenu([false, true, false]);
    else if(id === '2') setMenu([false, false, true]);

  }

  return (
    <div className="l-app">

      <Header handler = { menuRender }/>
      <Main menu = { menu }/>
    
    </div>
  );
}

export default App;
