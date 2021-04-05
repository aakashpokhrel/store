import React, { Component } from 'react'
import { Form, FormGroup,Container, Button } from 'react-bootstrap'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: '',
            isRegistered: false
        }
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/user/register', this.state)
            .then((res) => {
                console.log(res)
                this.setState({ isRegistered: true })

            }).catch(err => console.log(err));
    }

    render() {
        if (this.state.isRegistered) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <Container className="">
                    
                    <Form onSubmit={this.handleSubmit}>
                        <fieldset
                            style={{
                                width: "40%",
                                margin: "auto",
                                border: "2px solid grey",
                                padding: "30px"
                            }}
                            
                        >   <h3 className="text-center">Registration</h3>
                            <FormGroup>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control type="text" name="fname" id="fname"
                                    value={this.state.fname} onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control type="text" name="lname" id="lname"
                                    value={this.state.lname} onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" id="email"
                                    value={this.state.email} onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" name="username" id="username"
                                    value={this.state.username} onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" id="password"
                                    value={this.state.password} onChange={this.handleChange} />
                            </FormGroup>

                            <Button block variant="success" onClick={this.handleSubmit}>Submit</Button>
                        <br></br>
                            <Button  variant='danger'  onClick={() => this.props.history.push('/')}>Cancel</Button>
                            
                        </fieldset>
                      
                    </Form>
                </Container>
            </div>
        );
    }
}
