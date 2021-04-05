import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Toplogo from '../images/toplogo.png'
console.log(Toplogo);


export default class Inquiry extends Component {
    render() {
        return (
        
          <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Music Store</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/dashboard">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/booking">booking</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Product">All Product</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/OnlineServices">Online Services</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Contacts">Contacts</Link>
                </li> 
            </ul>
          </div>
        </div>
      </nav>
    
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              
            
            </div>
          </div>
        
            </div>
          
      </section>

      <section className="page-section" id="About">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Learn more</h2>
                <h3 className="section-subheading text-muted">About</h3>
              </div>
            </div>
            <div className="row text-center">
            <div className="col-md-4">
                <h4 className="service-heading">Address</h4>
                <p> Sinamangal-6, Kathmandu, Nepal</p>

              </div>

              <div className="col-md-4">
                <h4 className="service-heading">Contact Number</h4>
                <p>+977-1-556081</p>
                <br></br>
                <Button variant="primary" href="/Login">Get in Touch</Button>
              </div>
              <div className="col-md-4">
                <h4 className="service-heading">Email</h4>
                <p>sumedh@example.com</p>
              </div>
            </div>
          </div>
        </section>
         <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Tickets 2021 2019</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#something">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
        </div>
      );
        }
      }