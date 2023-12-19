import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer.jsx';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<ItemlistContainer />}/>
        <Route path="/productos/:categoryId" element={ <ItemlistContainer/> } />
        <Route path="/item/:itemId" element={ <ItemDetailContainer/> } />
        <Route path="*" element={<Navigate to={"/"}></Navigate>}/>
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
