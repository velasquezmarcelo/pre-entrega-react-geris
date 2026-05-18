import './App.css'
import Header from "./components/layouts/Header";
import MainLayout from "./components/layouts/MainLayout";
import Footer from "./components/layouts/Footer"; 
import Nav from './components/layouts/Nav';

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <MainLayout/>
      <Footer/>
    </>
  )
}

export default App
