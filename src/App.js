
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/Home';
import ContactPage from './components/ContactPage';



function App() {
  return (
    
      <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contect' element={<ContactPage/>} />
        
       
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
