import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Table, Button } from 'reactstrap'
import { Form, FormGroup, Container } from 'react-bootstrap'
import {Link } from 'react-router-dom'
import Axios from 'axios'

export default class AddServices extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ServiceId: '',
            venue: '',
            ticketrate: '',
            description: '',
            isEdit: false,
            Services: [] //array of object
            //isEdit:false,
            //token information pathauna

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
        //edit code
        if (this.state.isEdit) {
            Axios.put(`http://localhost:3001/service/${this.state.ServiceId}`,
                { venue: this.state.venue ,
                ticketrate: this.state.ticketrate ,
                 description: this.state.description }
            )
                .then((res) => {
                    console.log(res.data)
                    const updatedService = this.state.Services.map((OnlineServices) => {
                        if (OnlineServices._id === this.state.ServiceId) {
                            OnlineServices.venue = this.state.venue
                            OnlineServices.ticketrate = this.state.ticketrate
                            OnlineServices.description = this.state.description

                        }

                        this.setState({
                            Services: updatedService,
                            isEdit: false,
                            venue: '',
                            ticketrate: '',
                            description: '',
                            ServiceId: ''
                        })
                        return OnlineServices;
                    })
                }).catch((err) => console.log(err.response))

        } else {
            Axios.post('http://localhost:3001/service', { venue: this.state.venue, ticketrate: this.state.ticketrate, description: this.state.description })
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        Services: this.state.Services.concat(res.data), //without loading page data add  spread operator
                        venue: '',
                        ticketrate: '',
                        description: ''
                    })


                }).catch(err => console.log(err.response));
        }

    }

    deleteService = (ServiceId) => {
        console.log(ServiceId);
        Axios.delete(`http://localhost:3001/service/${ServiceId}`)
            .then((res) => {
                console.log(res.data);
                const filteredOnlineServices = this.state.Services.filter((OnlineServices) => {
                    return OnlineServices._id !== ServiceId

                });
                this.setState({
                    Services: filteredOnlineServices
                })
            }).catch((err) => console.log(err.response));
    }

    editService = (ServiceId) => {
        console.log(ServiceId);
        const services_ = this.state.Services.find((OnlineServices) => {

            return OnlineServices._id === ServiceId
        });
        this.setState({
            ServiceId: services_._id,
            venue: services_.venue,
            ticketrate: services_.ticketrate,
            description: services_.description,
            isEdit: true
        })
    }




    render() {
        return (
            <div>
                <Navbar bg="secondary" variant="dark">
                    <Navbar.Brand href="/admin">Staff Dashboard</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/admin">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/AddShow">AddShow</Link></Nav.Link>
                        <Nav.Link><Link to="/ViewBooking">View Booking</Link></Nav.Link>
                        <Nav.Link><Link to="/AddServices">AddServices</Link></Nav.Link>
                    </Nav>
                </Navbar>

                <section className="page-section" id="contact">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">All Required Show</h2>
                                <h3 className="section-subheading text-muted">Available here.</h3>
                            </div>
                        </div>

                        <div style={{ height: "55vh" }} >
                            <div className= "text-white">
                                <Container>

                                    <Form onSubmit={this.handleSubmit}>
                                        <fieldset
                                            style={{
                                                width: "70%",
                                                margin: "auto",
                                                border: "2px solid grey",
                                                padding: "30px"
                                            }}
                                        >
                                            <h3 className="text-center">Show</h3>
                                            <FormGroup>
                                                <Form.Label>Venue</Form.Label>

                                                <Form.Control type="text" name="venue" id="venue" placeholder="venue"
                                                    value={this.state.venue} onChange={this.handleChange} />
                                            </FormGroup>

                                            <FormGroup>
                                                <Form.Label>Ticketrate</Form.Label>
                                                <Form.Control type="text" name="ticketrate" id="ticketrate" placeholder="ticketrate"
                                                    value={this.state.ticketrate} onChange={this.handleChange} />
                                            </FormGroup>

                                            <FormGroup>
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control type="text" name="description" id="description" placeholder="description"
                                                    value={this.state.description} onChange={this.handleChange} />
                                            </FormGroup>
                                            {
                                                this.state.isEdit ? (
                                                    <Button variant="secondary" size="sm" block onClick={this.handleSubmit} >Update</Button>
                                                ) : (




                                                        <Button variant="primary" size="sm" block onClick={this.handleSubmit} >Add</Button>

                                                    )
                                            }
                                        </fieldset>
                                    </Form>
                                </Container>
                            </div>

                            <hr />

                            <Table>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                        <th>Venue</th>
                                        <th>Ticket rate</th>
                                        <th>Description</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Services.map(OnlineServices => (
                                        <tr>
                                                   <th scope="row">#</th>
                                            <td key={OnlineServices._id}>{OnlineServices.venue}</td>
                                            <td key={OnlineServices._id}>{OnlineServices.ticketrate}</td>
                                            <td key={OnlineServices._id}>{OnlineServices.description}</td>
                                            <td>
                                                <Button variant="danger" onClick={() => this.deleteService(OnlineServices._id)}>Delete</Button>
                                                <Button variant="danger" onClick={() => this.editService(OnlineServices._id)}>Edit</Button>
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