import React from 'react';
import './App.css';
import Home from './components/Home'; //import the page
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import booking from './components/booking';
import Product from './components/Product';
import OnlineServices from './components/OnlineServices';
import Dashboard from './components/Dashboard';
import Contacts from './components/Contacts';
import AdminRoute from './components/AdminRoute';
//import for admin
import AdminDash from './components/AdminDash';
import AddProduct from './components/AddProduct';
import ViewBooking from './components/ViewBooking';
import AddServices from './components/AddServices';
//import NavBar from './Linked-Component/NavBar';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (

    <div>
      <BrowserRouter>
      <div>
           
          <Switch>
       
        <Route path='/register' component= {Register}/>
        <Route path='/login' component ={Login}/>
        <PrivateRoute path='/booking' component ={booking}/>
        <PrivateRoute path='/Product' component ={Product}/>
        <Route path='/Contacts' component ={Contacts}/>
        <PrivateRoute path='/OnlineServices' component ={OnlineServices}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <Route path ='/' exact component={Home}   />

        {/* for admin */}
        <AdminRoute path='/admin' component ={AdminDash}/>
        <PrivateRoute path='/AddProduct' component ={AddProduct}/>
        <PrivateRoute path='/ViewBooking' component ={ViewBooking}/>
        <PrivateRoute path='/AddServices' component ={AddServices}/>
        </Switch> 
        
          </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
