import logo from './logo.svg';
import './App.css';
import { Login } from './Components/LoginandRegister/Login';
import { Register } from './Components/LoginandRegister/Register';
import Product from './Components/ProductandNavigation/product';
import Navigation from './Components/ProductandNavigation/navigation';

function App() {
  return (
    <div>
  
      {/* <Login/>
      <Register/> */}
      <Navigation/>
      <Product/>
      
    </div>
  );
}

export default App;
