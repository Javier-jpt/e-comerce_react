import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import Cart from '../Pages/Cart/Cart'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


function Router() {
  return (
    <BrowserRouter>
    <Header />
    <nav className='Nav'>
        <Link to={"/"}>Login</Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
    </nav>
    
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default Router;
