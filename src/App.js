import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
