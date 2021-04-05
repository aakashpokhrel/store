import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BOB from '../images/B.O.B.jpg';
import Bruno from '../images/Bruno Mars.jpg';
import David from '../images/David Guetta.jpg';
import Toplogo from '../images/toplogo.png'
console.log(BOB);
console.log(Bruno);
console.log(David);
console.log(Toplogo);

export default class Dashboard extends Component {
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

                <button className='btn btn-warning' size="sm" onClick={() => {
                                    localStorage.removeItem('token');
                                    this.props.history.push('/');
                                }}>
                                    Logout
                                </button>


              </ul>
            </div>
          </div>
        </nav>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Welcome to Music Store </h2>
                <a className="btn btn-danger btn-xl text-uppercase js-scroll-trigger" href="#About">Tell Me More</a>

              </div>
            </div>

          </div>

        </section>
        <section className="page-section" id="About">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Available at</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">

                <h4 className="service-heading">Instrument Servicing</h4>
                <p className="text-muted">E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.</p>
              </div>
              <div className="col-md-4">

                <h4 className="service-heading">Hire Instrument</h4>
                <p className="text-muted">A performer is an entertainer like an actor, musician, singer that creatively expresses their artistic talent to an audience. They perform before live audiences and/or for television and film. Performers typically work closely with vocal coaches.</p>
              </div>
              <div className="col-md-4">

                <h4 className="service-heading"> Gears</h4>
                <p className="text-muted">Image result for web security
Web security is also known as “Cybersecurity”. It basically means protecting a website or web application by detecting, preventing and responding to cyber threats. Websites and web applications are just as prone to security breaches as physical homes, stores, and government locations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3 className="section-heading text-uppercase">Performer</h3>
                <h4 className="section-subheading text-muted">As a member</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                <img src={Bruno} alt="Logo" />;
                  <h4>Bruno Mars</h4>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="team-member">
                <img src={David} alt="Logo" />;
                  <h4>David Guetta</h4>
                </div>
                <Button variant="primary" href="/Product">More...</Button>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                 <img src={BOB} alt="Logo" />;
                  <h4>B.O.B</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted"></p>
              </div>
            </div>
          </div>
        </section>



        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">And get the services. You are always welcome and if their is any queries please get In touch</h3>
                <Button variant="primary" href="/Inquiry">Get in Touch</Button>
              </div>


            </div>

          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; Tickets 2021</span>
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
                      <i className="fa fa-Instagram"></i>
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
      </div >
    );
  }
}