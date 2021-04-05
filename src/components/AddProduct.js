import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Table, Button } from 'reactstrap'
import { Form, FormGroup, Container } from 'react-bootstrap'
import Axios from 'axios'
import {Link } from 'react-router-dom'
export default class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ProductId:'',
            sn: '',
            productname: '',
            productprice: '',
            products: [], //array of object
            isEdit:false,

            config: {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }
        }

    }

    componentDidMount() {  //only call once
        Axios.get(`http://localhost:3001/good`, this.state.config)
            .then((res) => {
                //console.log(res);
                this.setState({
                    products: res.data
                })
            }).catch((err) => console.log(err.response));

    }



    handleChange = (e) =>
        this.setState({ [e.target.name]: e.target.value })


    handleSubmit = (e) => {
        e.preventDefault(); 
        if(this.state.isEdit){
            Axios.put(`http://localhost:3001/good/${this.state.ProductId}`,
            {sn:this.state.sn,
            productname:this.state.productname,
            productprice:this.state.productprice},this.state.config
            )
            .then((res) =>{
              console.log(res.data)  
                const updatedProduct=this.state.products.map((Products) =>{
                    if(Products._id ===this.state.ProductId){
                        Products.sn= this.state.sn
                        Products.productname= this.state.productname
                        Products.productprice= this.state.productprice

                    }
    
                this.setState({
                    products:updatedProduct,
                    isEdit:false,
                    sn:'',
                    productname:'',
                    productprice:'',
                    ProductId:''
                })
                return Products;
                })
            }).catch((err) => console.log(err.response))
        
        }else{
        Axios.post('http://localhost:3001/good', { sn: this.state.sn, productname: this.state.productname, productprice: this.state.productprice },
            this.state.config)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    products: this.state.products.concat(res.data),
                    sn:'',
                    productname:'',
                    productprice:''

                })


            }).catch(err => console.log(err.response));
        }
    }

    deleteProduct = (ProductId) => {
        console.log(ProductId);
        Axios.delete(`http://localhost:3001/good/${ProductId}`, this.state.config)
            .then((res) => {
                console.log(res.data);
                const filteredproducts = this.state.products.filter((Products) => {
                    return Products._id !==ProductId

                });
                this.setState({
                    products: filteredproducts
                })
            }).catch((err) => console.log(err));
    }

    editProduct =(ProductId)=>{
        console.log(ProductId);
        const product_=this.state.products.find((Products)=>{
            console.log(this);
         return Products._id ===ProductId
        });
        this.setState({
          
            ProductId:product_._id,
           sn:product_.sn,
           productname:product_.productname,
           productprice:product_.productprice,
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
                        <Nav.Link><Link to="/AddProduct">AddProduct</Link></Nav.Link>
                        <Nav.Link><Link to="/ViewBooking">View Booking</Link></Nav.Link>
                        <Nav.Link><Link to="/AddServices">AddServices</Link></Nav.Link>
                    </Nav>
                </Navbar>



                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">All Required Product</h2>
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
                                            <h3 className="text-center">Product</h3>
                                            <FormGroup>
                                                <Form.Label>S.N</Form.Label>

                                                <Form.Control type="text" name="sn" id="sn" placeholder="Serial Number"
                                                    value={this.state.sn} onChange={this.handleChange} />
                                            </FormGroup>

                                            <FormGroup>
                                                <Form.Label>Product Name</Form.Label>
                                                <Form.Control type="text" name="productname" id="productname" placeholder="productname"
                                                    value={this.state.productname} onChange={this.handleChange} />
                                            </FormGroup>

                                            <FormGroup>
                                                <Form.Label>Product Price</Form.Label>
                                                <Form.Control type="text" name="productprice" id="productprice" placeholder="productprice"
                                                    value={this.state.productprice} onChange={this.handleChange} />
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
                                        <th>S.N</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.products.map(Products => (
                                        <tr>
                                             <th scope="row">#</th>
                                            <td key={Products._id}>{Products.sn}</td>
                                            <td key={Products._id}>{Products.productname}</td>
                                            <td key={Products._id}>{Products.productprice}</td>

                                            <Button variant="danger" onClick={() => this.deleteProduct(Products._id)}>Delete</Button>
                                            <Button variant="danger" onClick={() => this.editProduct(Products._id)}>Edit</Button>
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