//to make secure dashboard private roouter is defined 
//redirect to the login page 
import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute=({component:Component, ...rest})=>(
    <Route
    {...rest}
    render={props=>
        localStorage.getItem("token") ? (


            <Component {...props}/>

        ) :(
            <Redirect to={{

                pathname:'/',
                state:{from:props.location}
            }}
            />
        )}

        />
        
);
        
export default PrivateRoute;