import "./App.css";
import { Login } from "./Components/LoginandRegister/Login";
import { Register } from "./Components/LoginandRegister/Register";
import Product from "./Components/Products/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route>
          <Route index element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/products" element={<Product />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
