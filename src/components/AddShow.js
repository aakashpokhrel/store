import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Table, Button } from 'reactstrap'
import { Form, FormGroup, Container } from 'react-bootstrap'
import Axios from 'axios'
import {Link } from 'react-router-dom'
export default class AddShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ShowId:'',
            venue: '',
            ticketrate: '',
            timeperiod: '',
            shows: [], //array of object
            isEdit:false,
            //token information pathauna
            config: {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }
        }

    }

    componentDidMount() {  //only call once
        Axios.get(`http://localhost:3001/concert`, this.state.config)
            .then((res) => {
                //console.log(res);
                this.setState({
                    shows: res.data
                })
            }).catch((err) => console.log(err.response));

    }



    handleChange = (e) =>
        this.setState({ [e.target.name]: e.target.value })


    handleSubmit = (e) => {
        e.preventDefault(); //stop refreshing
        //edit code
        if(this.state.isEdit){
            Axios.put(`http://localhost:3001/concert/${this.state.ShowId}`,
            {venue:this.state.venue,
            ticketrate:this.state.ticketrate,
            timeperiod:this.state.timeperiod},this.state.config
            )
            .then((res) =>{
              console.log(res.data)  
                const updatedShow=this.state.shows.map((Shows) =>{
                    if(Shows._id ===this.state.ShowId){
                        Shows.venue= this.state.venue
                        Shows.ticketrate= this.state.ticketrate
                        Shows.timeperiod= this.state.timeperiod

                    }
    
                this.setState({
                    shows:updatedShow,
                    isEdit:false,
                    venue:'',
                    ticketrate:'',
                    timeperiod:'',
                    ShowId:''
                })
                return Shows;
                })
            }).catch((err) => console.log(err.response))
        
        }else{
        Axios.post('http://localhost:3001/concert', { venue: this.state.venue, ticketrate: this.state.ticketrate, timeperiod: this.state.timeperiod },
            this.state.config)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    shows: this.state.shows.concat(res.data), //without loading page data add  spread operator
                    venue:'',
                    ticketrate:'',
                    timeperiod:''

                })


            }).catch(err => console.log(err.response));
        }
    }

    deleteShow = (ShowId) => {
        console.log(ShowId);
        Axios.delete(`http://localhost:3001/concert/${ShowId}`, this.state.config)
            .then((res) => {
                console.log(res.data);
                const filteredshows = this.state.shows.filter((Shows) => {
                    return Shows._id !==ShowId

                });
                this.setState({
                    shows: filteredshows
                })
            }).catch((err) => console.log(err));
    }

    editShow =(ShowId)=>{
        console.log(ShowId);
        const show_=this.state.shows.find((Shows)=>{
            console.log(this);
         return Shows._id ===ShowId
        });
        this.setState({
          
           ShowId:show_._id,
           venue:show_.venue,
           ticketrate:show_.ticketrate,
           timeperiod:show_.timeperiod,
          isEdit:true
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
                                <h3 className="section-subheading text-muted">Listed here.</h3>
                            </div>
                        </div>

                        <div style={{ height: "55vh" }}>
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
                                                <Form.Label>Time period</Form.Label>
                                                <Form.Control type="text" name="timeperiod" id="timeperiod" placeholder="timeperiod"
                                                    value={this.state.timeperiod} onChange={this.handleChange} />
                                            </FormGroup>

                                            {
                                                this.state.isEdit ? (
                                                    <Button variant="warning" size="sm" block onClick={this.handleSubmit} >Update</Button>   
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
                                        <th>Timeperiod</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.shows.map(Shows => (
                                        <tr>
                                             <th scope="row">#</th>
                                            <td key={Shows._id}>{Shows.venue}</td>
                                            <td key={Shows._id}>{Shows.ticketrate}</td>
                                            <td key={Shows._id}>{Shows.timeperiod}</td>

                                            <Button variant="danger" onClick={() => this.deleteShow(Shows._id)}>Delete</Button>
                                            <Button variant="danger" onClick={() => this.editShow(Shows._id)}>Edit</Button>
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