import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import { Form, FormGroup, Button, Container } from 'react-bootstrap'
import Axios from 'axios'
import Toplogo from '../images/toplogo.png'
console.log(Toplogo)


export default class booking extends Component {
    constructor(props) {
        super(props)
        this.state = {
      
            seats: '',
            customername: '',
            location: '',
            reserve: [],
            product:"",
            isEdit:false,

            config:{
                header: {'Authorization': "Bearer"+ localStorage.getItem}
            }

        }
    }
    
    handleChange = (e) =>
        this.setState({ [e.target.name]: e.target.value })

    handleSubmit = (e) => {
       
        // e.preventDefault();
        alert(e); //stop refreshing
        Axios.post('http://localhost:3001/reserve', this.state)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    reserve: this.state.reserve.concat(res.data),
                    seats: '',
                    customername: '',
                    location: '',
             
                     
                 
                })

            }).catch(err => console.log(err.response));

    }


    render() {
        return (
            <div className="App">
                <nav className="autohide navbar navbar-expand-lg navbar-dark bg-secondary" id="mainNav">
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
                  <Link className="nav-link js-scroll-trigger" to="/Inquiry">Inquiry</Link>
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
              <h2 className="section-heading text-uppercase">About Concert</h2>
              <h3 className="section-subheading text-muted">uygfiuhg</h3>
            
            </div>
          </div>
        
            </div>
          
      </section>



                <section className="page-section" id="booking">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Book Here</h2>
                                <h3 className="section-subheading text-muted">And enjoy the product.</h3>
                            </div>
                        </div>

                        <div style={{ height: "55vh" }}>
                            <Container>
                                <div>
                                    <Form onSubmit={this.handleSubmit}>
                                        <fieldset
                                            style={{
                                                width: "70%",
                                                margin: "auto",
                                                border: "2px solid grey",
                                                padding: "30px"
                                            }}
                                        >
                                            <h3 className="text-center">Booking</h3>
                                          

                                            <FormGroup>
                                                <Form.Label>Customer Name</Form.Label>
                                                <Form.Control type="text" name="customername" id="customername" placeholder="Add customer name"
                                                    value={this.state.customername} onChange={this.handleChange} />
                                            </FormGroup>

                                            <FormGroup>
                                                <Form.Label>Location</Form.Label>
                                                <Form.Control type="text" name="location" id="location" placeholder="Add location"
                                                    value={this.state.location} onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Form.Label>Seats</Form.Label>
                                                <Form.Control type="text" name="seats" id="seats" placeholder="Add Requuired seats number"
                                                    value={this.state.seats} onChange={this.handleChange} />
                                            </FormGroup>
                                        
                                                {/* <button onClick={this.shoot}>Take the shot!</button> */}
                                             <Button variant="primary" size="sm" block onClick={this.handleSubmit.bind(this,"Successful")} >Book now</Button>
                                        </fieldset>
                                    </Form>
                                </div>
                            </Container>
                            <hr />

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
            </div >
        );
    }
}










