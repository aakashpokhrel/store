import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import { Table } from 'reactstrap'

import Axios from 'axios'

import Toplogo from '../images/toplogo.png'
console.log(Toplogo)

export default class OnlineServices extends Component {
    constructor(props) {
        super(props)

        this.state = {
            venue: '',
            ticketrate: '',
            description: '',
            Services: []


        }
    }

    componentDidMount() {  //only call once
        Axios.get(`http://localhost:3001/service`)
            .then((res) => {
                //console.log(res);
                this.setState({
                    Services: res.data
                })
            }).catch((err) => console.log(err.response));

    }

    handleChange = (e) =>
        this.setState({ [e.target.name]: e.target.value })


    handleSubmit = (e) => {
        e.preventDefault(); //stop refreshing


    }
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

                <header className="masthead">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">Welcome To Concert Booking App</div>
                            <div className="intro-heading text-uppercase">Music Can Change The World</div>
                            <a className="btn btn-secondary btn-xl text-uppercase js-scroll-trigger" href="#About">Tell Me More</a>
                        </div>
                    </div>
                </header>


                <section className="page-section" id="OnlineServices">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Services</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>

                        <div style={{ height: "55vh" }}>
                            <hr />

                            <Table>
                                <thead>
                                    <tr>

                                        <th>Venue</th>
                                        <th>Ticket rate</th>
                                        <th>Description</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Services.map(OnlineServices => (

                                        <tr>

                                            <td key={OnlineServices._id}>{OnlineServices.venue}</td>
                                            <td key={OnlineServices._id}>{OnlineServices.ticketrate}</td>
                                            <td key={OnlineServices._id}>{OnlineServices.description}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <span className="copyright">Copyright &copy; Tickets 2021 2021</span>
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


















//             <div>
//              <Form onSubmit={this.handleSubmit}>
//                     <Input type="text" placeholder="Add venue"
//                         value={this.state.venue} onChange={this.handleChange} />

//                     <Input type="text" placeholder="Add ticketrate"
//                         value={this.state.ticketrate} onChange={this.handleChange} />

//                     <Input type="text" placeholder="Add booking"
//                         value={this.state.booking} onChange={this.handleChange} />


//                     <Button block color="primary" className="mt-4" size="sm">Add </Button>
//                 </Form>
//                 <hr />
//                 <ListGroup>
//                     {
//                         this.state.Services.map((OnlineServices) => {
//                             return <ListGroupItem key={OnlineServices._id}>{OnlineServices.venue} </ListGroupItem>
//                         })
//                     }
//                 </ListGroup>

//             </div>
//         )
//     }
// }