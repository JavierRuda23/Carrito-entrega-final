
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './Components/Context/DataContext';
import CartContent from './Components/Home/CartContent/CartContent';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path='/cart' element={<CartContent/>}/>
      </Routes>
    </BrowserRouter>
    </DataProvider>
      

    
  );
}

export default App;
