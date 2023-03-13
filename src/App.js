import './App.css';
import Router from './routes/Router';
import CartProvider from './Context/CartProvider';
import UserProvider from './Context/Users/UserProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
        <UserProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </UserProvider>
        <ToastContainer />
    </>
  );
}

export default App;