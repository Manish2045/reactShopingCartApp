import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Container, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Progress, Row } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import base_URL from '../api/BootAPI';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function OrderInvoice() {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    const [modal, setModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [date, setDate] = useState()
    const [time , setTime] = useState()
    const toggle = () => {
        setModal(!modal);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const isButtonDisabled = selectedOption === '';

    useEffect(() => {
        document.title = 'Order Invoice';

        fetchOrder(orderId);
    }, [orderId]);

    const fetchOrder = (orderId) => {
        axios
            .get(`${base_URL}/order/${orderId}`)
            .then((response) => {
                if (response.data) {
                    setOrder(response.data);
                    
                    const orderDate = new Date(response.data.orderDate);
                    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
                    const t = orderDate.toLocaleString('en-US', timeOptions);
                    
                    const dateOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
                    const d = orderDate.toLocaleString('en-US', dateOptions);
                    
                    setTime(t); // Extract time
                    setDate(d); // Extract date
                    console.log("////////////////////////////////",order.shippingAddress[0]);
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    if (!order) {
        return <div>Loading...</div>;
    }



    const cancelThisProduct = () => {
        axios
            .post(`${base_URL}/changeStatus/${orderId}`, { orderStatus: 'cancelled' })
            .then((response) => {
                toast('Canclled!', { autoClose: 2000 });
                if (response.data) {
                    console.log(response.data);
                    navigate('/profile/orderHistory'); // Redirect to /orderhistory after completing the task
                    toast.success('Canceled', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    return (
        <section className="h-100 gradient-custom">

            <ToastContainer />
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col lg={10} xl={8}>
                        <Card className="p-4" style={{ width: '100%', textAlign: 'left', borderRadius: '10px' }}>
                            <CardTitle style={{ display: 'flex', justifyContent: 'space-between' }} tag="h4">
                                Invoice

                                {order.orderStatus === 'In trans' && (
                                    <Button style={{ width: 90, }} color="danger" onClick={toggle} >
                                        Cancel
                                    </Button>
                                )}
                            </CardTitle>


                            {order.orderStatus === 'In trans' && (
                                <Modal isOpen={modal} toggle={toggle} centered={true}>
                                    {order.orderStatus === 'In trans' && (
                                        <ModalHeader toggle={toggle}>
                                            <span style={{fontSize:' 24px', color: 'red', fontWeight: 600}}>Reason for cancellation</span>
                                            <p className="small text-muted mb-0">Please tell us the correct reason for cancellation. This information is only used to improve our service.</p>
                                        </ModalHeader>
                                    )}
                                    <ModalBody>
                                        <FormGroup tag="fieldset">
                                            <legend>Radio Buttons</legend>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Product not required anymore
                                                </Label>
                                            </FormGroup>


                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Cash Issue
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Ordered By Mistake
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Wants to change style/color
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    value="Product not required anymore"
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label check>
                                                    Duplicate Order
                                                </Label>
                                            </FormGroup>
                                            {/* Add other radio buttons with similar structure */}
                                        </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={cancelThisProduct} disabled={isButtonDisabled}>
                                            Cancel
                                        </Button>

                                    </ModalFooter>
                                </Modal>
                            )}
                            <CardBody className="px-4 py-2">

                                {order.orderProducts.map((product) => (
                                    
                                    <Card key={product.productId} className="shadow-0 border mb-4">
                                        <CardBody>
                                            <Row>
                                                <Col md={3}>
                                                    <img src={product.image} className="img-fluid" alt="Product" />
                                                </Col>
                                                <Col md={3} className="text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0">{product.productName}</p>
                                                </Col>
                                                <Col md={3} className="text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Qty. {product.quantity}</p>
                                                </Col>
                                                <Col md={3} className="text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">${product.price}</p>
                                                </Col>
                                            </Row>
                                            <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                            <Row className="d-flex align-items-center">
                                                <Col md={2}>
                                                    <p style={{ fontWeight: 500 }} className="text mb-0 small">Track Order</p>
                                                </Col>
                                                <Col md={10}>
                                                    <Progress style={{ height: '6px', borderRadius: '16px' }} value={75} color="info" className="mb-3" />
                                                    <div className="d-flex justify-content-around mb-1">
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivery</p>
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                ))}
                                <div className="d-flex justify-content-between pt-2">
                                    <p className="fw-bold mb-0">Order Details</p>
                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span> ${order.amountPaid}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="text-muted mb-0">OrderId: #{orderId}</p>
                                    <p className="text-muted mb-0"><span className="fw-bold me-4">GST 18%</span>${order.amountPaid * .18}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="text-muted mb-0">Order Date: {time}, {date}</p>
                                    {/* <p className="text-muted mb-0"><span className="fw-bold me-4">GST 18%</span>${order.amountPaid * .18}</p> */}
                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> $5</p>
                                </div>
                                <div className="d-flex justify-content-between mb-5">
                                    <p style={{ width: 300 }} className="text-muted mb-0">Address : {order.shippingAddress[0].fullName} <br />  {order.shippingAddress[0].flatNumber}, {order.shippingAddress[0].colonyName}, {order.shippingAddress[0].city},{order.shippingAddress[0].pincode},{order.shippingAddress[0].state} </p>
                                </div>
                            </CardBody>
                            <CardFooter className="border-0 px-4 py-5" style={{ backgroundColor: 'black', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>

                                {order.orderStatus === 'cancelled' ? (
                                    <div className="d-flex justify-content-end align-items-center mb-0">
                                        <span style={{ color: 'red', fontSize: '35px', marginRight: 10 }}><FontAwesomeIcon icon={faXmark} /></span>
                                        <span style={{ color: '#fff' }}>Cancelled</span>
                                    </div>
                                ) : (
                                    <div className="d-flex justify-content-end align-items-center mb-0">
                                        <h4 style={{ color: '#fff', marginRight: 20 }}>Total Amount :- </h4>
                                        <h5 style={{ color: '#fff' }}>${order.amountPaid + (order.amountPaid * .18) + 5}</h5>
                                    </div>
                                )}
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default OrderInvoice;
