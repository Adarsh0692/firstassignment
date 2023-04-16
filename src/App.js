import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Create/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/delete' element={<Delete/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
