import React from 'react';
import './App.css';
import { Home } from './Home';
import { About } from './About';


function App() {
  return (  
    <div className='container'>
      
      <Home/>
      
      <footer className="bg-gray-800 text-white text-center p-2">
      <About/>
      </footer>

    </div>

  );
}

export default App;
