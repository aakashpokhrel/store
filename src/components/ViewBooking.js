import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Table,Button } from 'reactstrap'
import {Link } from 'react-router-dom'

import Axios from 'axios'


export default class ViewBooking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seats: '',
            customername:'',
            location:'',

            reserve: [],

            config: {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }
           
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:3001/reserve', this.state.config)
            .then((res) => {
                this.setState({
                    reserve: res.data
                })
            }).catch((err) => console.log(err.response));

    }
    handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/reserve', this.state)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    reserve: this.state.reserve.concat(res.data) 


                })

            }).catch(err => console.log(err.response));

    }
   deletebooking=(bookingId)=>{
        console.log(bookingId);
        Axios.delete(`http://localhost:3001/reserve/${bookingId}`)
        .then((res) => {
            console.log(res.data);
            const filteredbooking= this.state.reserve.filter((booking)=>{
               return booking._id !== bookingId
                
             });
             this.setState({
                 reserve: filteredbooking
           
             })
            
        }).catch((err) => console.log(err.response));
    
    }

    render() {
        return (
            <div>
                <Navbar bg="secondary" variant="dark">
                    <Navbar.Brand href="/admin"> Staff Dashboard</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/admin">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/AddProduct">AddProduct</Link></Nav.Link>
                        <Nav.Link><Link to="/ViewBooking">View Booking</Link></Nav.Link>
                        <Nav.Link><Link to="/AddServices">AddServices</Link></Nav.Link>
                    </Nav>
                </Navbar>

           

                        

                 <section className="page-section" id="booking">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Book Here</h2>
                                <h3 className="section-subheading text-muted">Booking of user available here</h3>
                            </div>
                        </div>
                        <div style={{ height: "55vh" }}>
                            
                            <hr />

                            <Table>
                                <thead>
                                    <tr>
                                        <th>Seats</th>
                                        <th>Customer Name</th>
                                        <th>Location</th>
                                      
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.reserve.map(booking => (
                                        <tr>
                                          
                                            <td key={booking._id}>{booking.seats}</td>
                                             <td key={booking._id}>{booking.customername}</td>
                                            <td key={booking._id}>{booking.location}</td> 

                                            <td>
                                            <Button variant="primary"  onClick={() =>this.deletebooking(booking._id)}>Delete</Button>
                                           
                                                </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </section> 
                </div>
        );
    }
}