// state form haru hhunxa so better to make it class
import React, { Component } from 'react'
import { Form, FormGroup, Button, Container } from 'react-bootstrap'
import axios from 'axios';


import { Redirect } from 'react-router-dom';

import JwtDecode from 'jwt-decode';

export default class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isUser:false,
            isAdmin:false,
            //loggedIn: false

        }
    }
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    handleLogin = (e) => {
        e.preventDefault(); //stop refreshing
        axios.post('http://localhost:3001/user/login', this.state) //api connection
            .then((res) => {
                console.log(res)
                localStorage.setItem('token', res.data.token);
                let user = JwtDecode(res.data.token);
                if (user.role === 'admin') this.setState({ isAdmin: true })
                else this.setState({ isUser: true })

            }).catch(err => console.log(err));
    }

    render() {
        

        if (this.state.isAdmin) {
            return <Redirect to='/admin' />
        } else if (this.state.isUser) {
            return <Redirect to='/admin' />
        }
        return (
            <div style={{ height: "55vh" }}>
                <Container>
                    <Form onSubmit={this.handleLogin}>
                        <fieldset
                            style={{
                                width: "40%",
                                margin: "auto",
                                border: "2px solid grey",
                                padding: "30px"
                            }}
                        >
                            <h3 className="text-center">Login</h3>
                            <FormGroup>
                                <Form.Label>Username</Form.Label>

                                <Form.Control type="text" name="username" id="username" placeholder="Username"
                                    value={this.state.username} onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" id="password" placeholder="password"
                                    value={this.state.password} onChange={this.handleChange} />
                            </FormGroup>
                            <Button variant="success"   block onClick={this.handleLogin}>Login</Button>
                            <br></br>
                            <Button variant="danger"  onClick={() => this.props.history.push('/')}>Cancel</Button>
                        </fieldset>
                    </Form>
                </Container>
            </div>


        );
    }
}












