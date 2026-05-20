import './App.css';
import MainLayout from "./components/layouts/MainLayout";
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/items/ProductDetail';
import Contact from './components/Contact';
import ItemListContainer from './components/items/ItemListContainer';
import FormContainer from './components/items/FormContainer';
import Carrito from './components/Carrito';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<h1>Inicio</h1>}/>
          <Route path="/producto/:id" element={<ProductDetail/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
        </Route>
      </Routes>
      <ItemListContainer/>
      <FormContainer/>
    </>
  )
}

export default App
