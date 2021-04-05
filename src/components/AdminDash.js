import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Link } from 'react-router-dom'

export default class AdminDash extends Component {
  render() {
    return (
      <div>
        <Navbar bg="secondary" variant="dark">
          <Navbar.Brand href="/admin">Welcome to Admin Dashboard</Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link><Link to="/admin">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/AddProduct">AddProduct</Link></Nav.Link>
                        <Nav.Link><Link to="/ViewBooking">View Booking</Link></Nav.Link>
                        <Nav.Link><Link to="/AddServices">AddServices</Link></Nav.Link>
            <button className='btn btn-warning' size="sm" onClick={() => {
                               localStorage.removeItem('token');
                                this.props.history.push('/');
                                 }}>Logout</button>
          </Nav>
        </Navbar>


        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Music is the medicine of the mind</h2>
                <h3 className="section-subheading text-muted">Good Music doesnt have an expiration date</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
             
            </div>
          </div>
        </section>

      </div>



    );

  }

}