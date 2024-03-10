import "./App.css";
import React from 'react';
import Login from "./Components/LoginandRegister/Login";
import Register from './Components/LoginandRegister/Register';
import Product from "./Components/Products/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/navigation";
import ViewProduct from "./Components/ViewSingleProduct/viewproduct";
import AdminAddProduct from "./Components/AdminAddProduct/adminaddproduct";
import Home  from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import ContactUs from"./Components/ContactUs/contactus";
import Profile from"./Components/Profile/profile";
import Checkout from "./Components/Checkout/Checkout";
import AdminProfile from "./Components/AdminProfile/adminprofile";
import AdminInventoryReport from "./Components/AdminInventoryReport/admininventoryreport";
import AboutUs from "./Components/AboutUs/aboutus";
import AdminUpdateProduct from "./Components/AdminUpdateProduct/adminupdateproduct";
import Modal from "./Components/Popup/Modal/Modal";
import AdminViewProduct from "./Components/AdminViewProduct/adminviewproduct";
import ProductDelete from "./Components/Popup/ProductDelete/productdelete";
import Shop from "./Components/Shop/Shop";
import AdminDashboard from "./Components/AdminDashboard/admindashboard";
import AdminOrder from "./Components/AdminOrder/adminorder";
import UserOrder from "./Components/UserOrder/userorder";
import AdminOrderById from "./Components/AdminOrderById/adminorderbyid";
import UserOrderById from "./Components/UserOrderById/userorderbyid";
import store from './store';
import { Provider } from 'react-redux';
import AdminSalesReport from "./Components/AdminSalesReport/adminsalesreport";




function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route>
          <Route index element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/products/:type" element={<Product />}></Route>
          <Route path="/viewproduct/:id" element={<ViewProduct />}></Route>
          <Route path="/adminaddproduct" element={<AdminAddProduct />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout/:id" element={<Checkout />}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/profile/:id" element={<Profile/>}></Route>
          <Route path="/adminprofile" element={<AdminProfile/>}></Route>
          <Route path="/admininventoryreport" element={<AdminInventoryReport/>}></Route>
          <Route path="/adminsalesreport" element={<AdminSalesReport/>}></Route>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/adminupdateproduct/:id" element={<AdminUpdateProduct />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/adminviewproduct" element={<AdminViewProduct/>} />
          <Route path="/productdelete" element={<ProductDelete />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminorders" element={<AdminOrder />} />
          <Route path="/userorders" element={<UserOrder />} />
          <Route path="/adminordersbyid/:id" element={<AdminOrderById />} />
          <Route path="/userordersbyid/:id" element={<UserOrderById />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
