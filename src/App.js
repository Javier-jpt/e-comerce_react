import './App.css';
import Router from './routes/Router';
import CartProvider from './Context/CartProvider';
import UserProvider from './Context/Users/UserProvider';

function App() {
  return (
        <UserProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </UserProvider>
  );
}

export default App;