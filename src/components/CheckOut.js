


// import React, { useState, useEffect } from 'react';
// import { Card, CardBody, CardImg, Col, FormGroup, Input, Label, Button, CardHeader, CardTitle } from 'reactstrap';
// import axios from 'axios';
// import base_URL from '../api/BootAPI';

// const CheckOut = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [paymentOption, setPaymentOption] = useState('cod');

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//     axios
//       .get(`${base_URL}/cart`)
//       .then((response) => {
//         setCartItems(response.data);
//         calculateGrandTotal(response.data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   const calculateGrandTotal = (items) => {
//     let total = 0;
//     items.forEach((item) => {
//       total += item.price * item.quantity;
//     });
//     const gst = total * 0.18; // Assuming GST rate of 18%
//     total += gst;
//     setGrandTotal(total);
//   };

//   const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
//   };

//   const handlePaymentOptionChange = (event) => {
//     setPaymentOption(event.target.value);
//   };

//   return (
//     <>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row justify-content-center align-items-center h-100">
//             <div className="col-lg-8">
//               <div className="card rounded-10">
//                 <CardBody className="p-4">
//                   <div className="d-flex justify-content-between align-items-center mb-4">
//                     <h3 className="lead fw-normal mb-0" style={{ color: 'black' }}>
//                       {`Items (${cartItems.length})`}
//                     </h3>
//                     <p className="small text-muted mb-0">Order Id: 788152</p>
//                   </div>
//                   {cartItems.map((item) => (
//                     <Card className="shadow-sm border mb-4" key={item.productId}>
//                       <CardBody>
//                         <div className="d-flex align-items-center">
//                           <div className="col-md-2">
//                             <CardImg src={item.image} alt="Product" className="img-fluid" />
//                           </div>
//                           <div className="col-md-4">
//                             <p className="text-muted mb-0">{item.productName}</p>
//                           </div>
//                           <div className="col-md-3 text-end">
//                             <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
//                           </div>
//                           <div className="col-md-3 d-flex justify-content-end text-end">
//                             <p className="text-muted mb-0 small">${item.price}</p>
//                           </div>
//                         </div>
//                         <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
//                       </CardBody>
//                     </Card>

//                   ))}
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Sub Total</span> ({subTotal })
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">GST(18%)</span> ({totalAfterGst})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <p className="text-muted mb-0">Order Date: {getCurrentDate()}</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Delivery Charges</span> $5.00
//                     </p>
//                   </div>
//                 </CardBody>
//                 <div className="card-footer border-0 px-4 py-3">
//                   <h5 className="d-flex align-items-center justify-content-end text-uppercase mb-0">
//                     Total Price: <span className="h2 mb-0 ms-2">${grandTotal.toFixed(2)}</span>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 payment-cards-options">
//               <Card className="addressCard my-4" style={{ padding: '10px', textAlign: 'left' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                   Address
//                 </CardTitle>
//                 <CardHeader className="d-flex justify-content-between">
//                   <span>Deliver to: Anand Nagar, Press colony, Madhya Pradesh Bhopal - 462022</span>

//                 </CardHeader>
//                 <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                   <Button color="link" style={{ color: 'black' }} className="ml-auto">
//                     Change
//                   </Button>
//                 </div>
//               </Card>

//               <Card className='p-3' style={{ textAlign: 'left' }}>
//                 <div className="paymentinputs">
//                   <div className="payment-panel panel">
//                     <div className="checkout-overlay" style={{ display: 'none' }}></div>
//                     <CardTitle className="mb-4" tag="h4">
//                       PAYMENT
//                     </CardTitle>
//                     <div className="payment-content clearfix panel-body" style={{ display: 'block' }}>
//                       <div className="couponM-container mob clearfix">
//                         <FormGroup>
//                           <legend className="col-form-label col-sm-12">Payment Options</legend>
//                           <div className="list-group">
//                             <label className="list-group-item list-group-item-action" style={paymentOption === 'card' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="card"
//                                 checked={paymentOption === 'card'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled={paymentOption === 'cod'}
//                               />
//                               {paymentOption === 'cod' ? (
//                                 <span style={{ alignSelf: 'flex-end' }}>
//                                   Cards <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                                 </span>
//                               ) : (
//                                 'Cards'
//                               )}
//                             </label>
//                             <label className="list-group-item list-group-item-action" style={paymentOption === 'netBanking' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="netBanking"
//                                 checked={paymentOption === 'netBanking'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled={paymentOption === 'cod'}
//                               />
//                               {paymentOption === 'cod' ? (
//                                 <span style={{ alignSelf: 'flex-end' }}>
//                                   Net Banking <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                                 </span>
//                               ) : (
//                                 'Net Banking'
//                               )}
//                             </label>
//                             <label className="list-group-item list-group-item-action" style={paymentOption === 'wallets' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="wallets"
//                                 checked={paymentOption === 'wallets'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled={paymentOption === 'cod'}
//                               />
//                               {paymentOption === 'cod' ? (
//                                 <span style={{ alignSelf: 'flex-end' }}>
//                                   Wallets <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                                 </span>
//                               ) : (
//                                 'Wallets'
//                               )}
//                             </label>
//                             <label className="list-group-item list-group-item-action" style={paymentOption === 'cod' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="cod"
//                                 checked={paymentOption === 'cod'}
//                                 onChange={handlePaymentOptionChange}
//                               />
//                               Cash on Delivery (COD)
//                             </label>
//                           </div>
//                         </FormGroup>


//                       </div>
//                       <div className="tabbable tabs-left juspay-tabbable"></div>
//                     </div>
//                     <div className="payment-footer footer" style={{display:'flex', justifyContent:'flex-end'}}>
//                       {/* <Button color="warning" className="mt-3">
//                         Proceed
//                       </Button> */}
//                       <Button color="warning" className="mt-3 text-end"> {/* Added "text-end" class */}
//                         Proceed
//                       </Button>

//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CheckOut;


// import React, { useState, useEffect } from 'react';
// import { Card, CardBody, CardImg, Button, CardHeader, CardTitle } from 'reactstrap';
// import axios from 'axios';
// import base_URL from '../api/BootAPI';

// const CheckOut = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [subTotal, setSubTotal] = useState(0); // Added subTotal state

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//     axios
//       .get(`${base_URL}/cart`)
//       .then((response) => {
//         setCartItems(response.data);
//         calculateGrandTotal(response.data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   const calculateGrandTotal = (items) => {
//     let total = 0;
//     items.forEach((item) => {
//       total += item.price * item.quantity;
//     });
//     const gst = total * 0.18; // Assuming GST rate of 18%
//     setGrandTotal(total + gst); // Set grand total (total + GST)
//     setSubTotal(total); // Set sub total
//   };

//   const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
//   };

//   return (
//     <>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row justify-content-center align-items-center h-100">
//             <div className="col-lg-8">
//               <div className="card rounded-10">
//                 <CardBody className="p-4">
//                   <div className="d-flex justify-content-between align-items-center mb-4">
//                     <h3 className="lead fw-normal mb-0" style={{ color: 'black' }}>
//                       {`Items (${cartItems.length})`}
//                     </h3>
//                     <p className="small text-muted mb-0">Order Id: 788152</p>
//                   </div>
//                   {cartItems.map((item) => (
//                     <Card className="shadow-sm border mb-4" key={item.productId}>
//                       <CardBody>
//                         <div className="d-flex align-items-center">
//                           <div className="col-md-2">
//                             <CardImg src={item.image} alt="Product" className="img-fluid" />
//                           </div>
//                           <div className="col-md-4">
//                             <p className="text-muted mb-0">{item.productName}</p>
//                           </div>
//                           <div className="col-md-3 text-end">
//                             <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
//                           </div>
//                           <div className="col-md-3 d-flex justify-content-end text-end">
//                             <p className="text-muted mb-0 small">${item.price}</p>
//                           </div>
//                         </div>
//                         <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
//                       </CardBody>
//                     </Card>
//                   ))}
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Sub Total</span> (${subTotal.toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">GST(18%)</span> (${(grandTotal - subTotal).toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <p className="text-muted mb-0">Order Date: {getCurrentDate()}</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Delivery Charges</span> $5.00
//                     </p>
//                   </div>
//                 </CardBody>
//                 <div className="card-footer border-0 px-4 py-3">
//                   <h5 className="d-flex align-items-center justify-content-end text-uppercase mb-0">
//                     Total Price: <span className="h2 mb-0 ms-2">${grandTotal.toFixed(2)}</span>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 payment-cards-options">
//               <Card className="addressCard my-4" style={{ padding: '10px', textAlign: 'left' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                   Address
//                 </CardTitle>
//                 <CardHeader className="d-flex justify-content-between">
//                   <span>Deliver to: Anand Nagar, Press colony, Madhya Pradesh Bhopal - 462022</span>
//                 </CardHeader>
//                 <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                   <Button color="link" style={{ color: 'black' }} className="ml-auto">
//                     Change
//                   </Button>
//                 </div>
//               </Card>
//               <Card className="p-3" style={{ textAlign: 'left' }}>
//                   <div className="paymentinputs">
//                     <div className="payment-panel panel">
//                       <div className="checkout-overlay" style={{ display: 'none' }}></div>
//                       <CardTitle className="mb-4" tag="h4">
//                         PAYMENT
//                       </CardTitle>
//                       <div className="payment-content clearfix panel-body" style={{ display: 'block' }}>
//                         <div className="couponM-container mob clearfix">
//                           <FormGroup>
//                             <legend className="col-form-label col-sm-12">Payment Options</legend>
//                             <div className="list-group">
//                               <label className="list-group-item list-group-item-action" style={paymentOption === 'card' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                                 <Input
//                                   name="paymentOption"
//                                   type="radio"
//                                   value="card"
//                                   checked={paymentOption === 'card'}
//                                   onChange={handlePaymentOptionChange}
//                                   disabled={paymentOption === 'cod'}
//                                 />
//                                 {paymentOption === 'cod' ? (
//                                   <span style={{ alignSelf: 'flex-end' }}>
//                                     Cards <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                                   </span>
//                                 ) : (
//                                   'Cards'
//                                 )}
//                               </label>
//                               <label className="list-group-item list-group-item-action" style={paymentOption === 'netBanking' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                                 <Input
//                                   name="paymentOption"
//                                   type="radio"
//                                   value="netBanking"
//                                   checked={paymentOption === 'netBanking'}
//                                   onChange={handlePaymentOptionChange}
//                                   disabled={paymentOption === 'cod'}
//                                 />
//                                 {paymentOption === 'cod' ? (
//                                   <span style={{ alignSelf: 'flex-end' }}>
//                                     Net Banking <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                                   </span>
//                                 ) : (
//                                   'Net Banking'
//                                 )}
//                               </label>
//                               <label className="list-group-item list-group-item-action" style={paymentOption === 'wallets' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                                 <Input
//                                   name="paymentOption"
//                                   type="radio"
//                                   value="wallets"
//                                   checked={paymentOption === 'wallets'}
//                                   onChange={handlePaymentOptionChange}
//                                   disabled={paymentOption === 'cod'}
//                                 />
//                                 {paymentOption === 'cod' ? (
//                                   <span style={{ alignSelf: 'flex-end' }}>
//                                     Wallets <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                                   </span>
//                                 ) : (
//                                   'Wallets'
//                                 )}
//                               </label>
//                               <label className="list-group-item list-group-item-action" style={paymentOption === 'cod' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                                 <Input
//                                   name="paymentOption"
//                                   type="radio"
//                                   value="cod"
//                                   checked={paymentOption === 'cod'}
//                                   onChange={handlePaymentOptionChange}
//                                 />
//                                 Cash on Delivery (COD)
//                               </label>
//                             </div>
//                           </FormGroup>


//                         </div>
//                         <div className="tabbable tabs-left juspay-tabbable"></div>
//                       </div>
//                       <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                         {/* <Button color="warning" className="mt-3">
//                         Proceed
//                       </Button> */}
//                         <Button color="warning" className="mt-3 text-end"> {/* Added "text-end" class */}
//                           Proceed
//                         </Button>

//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CheckOut;




// import React, { useState, useEffect } from 'react';
// import { Card, CardBody, CardImg, Button, CardHeader, CardTitle, Input, FormGroup } from 'reactstrap';
// import axios from 'axios';
// import base_URL from '../api/BootAPI';

// const CheckOut = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [subTotal, setSubTotal] = useState(0);
//   const [paymentOption, setPaymentOption] = useState('card'); // Added paymentOption state

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//     axios
//       .get(`${base_URL}/cart`)
//       .then((response) => {
//         setCartItems(response.data);
//         calculateGrandTotal(response.data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   const calculateGrandTotal = (items) => {
//     let total = 0;
//     items.forEach((item) => {
//       total += item.price * item.quantity;
//     });
//     const gst = total * 0.18; // Assuming GST rate of 18%
//     setGrandTotal(total + gst);
//     setSubTotal(total);
//   };

//   const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
//   };

//   const handlePaymentOptionChange = (event) => {
//     setPaymentOption(event.target.value);
//   };

//   return (
//     <>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row justify-content-center align-items-center h-100">
//             <div className="col-lg-8">
//               <div className="card rounded-10">
//                 <CardBody className="p-4">
//                   <div className="d-flex justify-content-between align-items-center mb-4">
//                     <h3 className="lead fw-normal mb-0" style={{ color: 'black' }}>
//                       {`Items (${cartItems.length})`}
//                     </h3>
//                     <p className="small text-muted mb-0">Order Id: 788152</p>
//                   </div>
//                   {cartItems.map((item) => (
//                     <Card className="shadow-sm border mb-4" key={item.productId}>
//                       <CardBody>
//                         <div className="d-flex align-items-center">
//                           <div className="col-md-2">
//                             <CardImg src={item.image} alt="Product" className="img-fluid" />
//                           </div>
//                           <div className="col-md-4">
//                             <p className="text-muted mb-0">{item.productName}</p>
//                           </div>
//                           <div className="col-md-3 text-end">
//                             <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
//                           </div>
//                           <div className="col-md-3 d-flex justify-content-end text-end">
//                             <p className="text-muted mb-0 small">${item.price}</p>
//                           </div>
//                         </div>
//                         <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
//                       </CardBody>
//                     </Card>
//                   ))}
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Sub Total</span> (${subTotal.toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">GST(18%)</span> (${(grandTotal - subTotal).toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <p className="text-muted mb-0">Order Date: {getCurrentDate()}</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Delivery Charges</span> $5.00
//                     </p>
//                   </div>
//                 </CardBody>
//                 <div className="card-footer border-0 px-4 py-3">
//                   <h5 className="d-flex align-items-center justify-content-end text-uppercase mb-0">
//                     Total Price: <span className="h2 mb-0 ms-2">${grandTotal.toFixed(2)}</span>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 payment-cards-options">
//               <Card className="addressCard my-4" style={{ padding: '10px', textAlign: 'left' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                   Address
//                 </CardTitle>
//                 <CardHeader className="d-flex justify-content-between">
//                   <span>Deliver to: Anand Nagar, Press colony, Madhya Pradesh Bhopal - 462022</span>
//                 </CardHeader>
//                 <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                   <Button color="link" style={{ color: 'black' }} className="ml-auto">
//                     Change
//                   </Button>
//                 </div>
//               </Card>
//               <Card className="p-3" style={{ textAlign: 'left' }}>
//                 <div className="paymentinputs">
//                   <div className="payment-panel panel">
//                     <div className="checkout-overlay" style={{ display: 'none' }}></div>
//                     <CardTitle className="mb-4" tag="h4">
//                       PAYMENT
//                     </CardTitle>
//                     <div className="payment-content clearfix panel-body" style={{ display: 'block' }}>
//                       <div className="couponM-container mob clearfix">
//                         <FormGroup>
//                           <legend className="col-form-label col-sm-12">Payment Options</legend>
//                           <div className="list-group">
//                             <label className="list-group-item list-group-item-action" style={paymentOption === 'card' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="card"
//                                 checked={paymentOption === 'card'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled={paymentOption === 'cod'}
//                               />
//                               {paymentOption === 'cod' ? (
//                                 <span style={{ alignSelf: 'flex-end' }}>
//                                   Cards <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                                 </span>
//                               ) : (
//                                 'Cards'
//                               )}
//                             </label>
//                             <label className="list-group-item list-group-item-action" style={paymentOption === 'netBanking' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="netBanking"
//                                 checked={paymentOption === 'netBanking'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled={paymentOption === 'cod'}
//                               />
//                               {paymentOption === 'cod' ? (
//                                 <span style={{ alignSelf: 'flex-end' }}>
//                                   Net Banking <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                                 </span>
//                               ) : (
//                                 'Net Banking'
//                               )}
//                             </label>
//                             <label className="list-group-item list-group-item-action" style={paymentOption === 'wallets' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="wallets"
//                                 checked={paymentOption === 'wallets'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled={paymentOption === 'cod'}
//                               />
//                               {paymentOption === 'cod' ? (
//                                 <span style={{ alignSelf: 'flex-end' }}>
//                                   Wallets <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                                 </span>
//                               ) : (
//                                 'Wallets'
//                               )}
//                             </label>
//                             <label className="list-group-item list-group-item-action" style={paymentOption === 'cod' ? { backgroundColor: 'rgba(55, 55, 55, 0.101)' } : {}}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="cod"
//                                 checked={paymentOption === 'cod'}
//                                 onChange={handlePaymentOptionChange}
//                               />
//                               Cash on Delivery (COD)
//                             </label>
//                           </div>
//                         </FormGroup>
//                       </div>
//                       <div className="tabbable tabs-left juspay-tabbable"></div>
//                     </div>
//                     <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                       <Button color="warning" className="mt-3 text-end">
//                         Proceed
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CheckOut;



// import React, { useState, useEffect } from 'react';
// import { Card, CardBody, CardImg, Button, CardHeader, CardTitle, FormGroup, Input } from 'reactstrap';
// import axios from 'axios';
// import base_URL from '../api/BootAPI';

// const CheckOut = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [subTotal, setSubTotal] = useState(0);
//   const [paymentOption, setPaymentOption] = useState('card'); // Added paymentOption state

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = () => {
//     axios
//       .get(`${base_URL}/cart`)
//       .then((response) => {
//         setCartItems(response.data);
//         calculateGrandTotal(response.data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   const calculateGrandTotal = (items) => {
//     let total = 0;
//     items.forEach((item) => {
//       total += item.price * item.quantity;
//     });
//     const gst = total * 0.18; // Assuming GST rate of 18%
//     setGrandTotal(total + gst);
//     setSubTotal(total);
//   };

//   const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
//   };

//   const handlePaymentOptionChange = (event) => {
//     setPaymentOption(event.target.value);
//   };

//   return (
//     <>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row justify-content-center align-items-center h-100">
//             <div className="col-lg-8">
//               <div className="card rounded-10">
//                 <CardBody className="p-4">
//                   <div className="d-flex justify-content-between align-items-center mb-4">
//                     <h3 className="lead fw-normal mb-0" style={{ color: 'black' }}>
//                       {`Items (${cartItems.length})`}
//                     </h3>
//                     <p className="small text-muted mb-0">Order Id: 788152</p>
//                   </div>
//                   {cartItems.map((item) => (
//                     <Card className="shadow-sm border mb-4" key={item.productId}>
//                       <CardBody>
//                         <div className="d-flex align-items-center">
//                           <div className="col-md-2">
//                             <CardImg src={item.image} alt="Product" className="img-fluid" />
//                           </div>
//                           <div className="col-md-4">
//                             <p className="text-muted mb-0">{item.productName}</p>
//                           </div>
//                           <div className="col-md-3 text-end">
//                             <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
//                           </div>
//                           <div className="col-md-3 d-flex justify-content-end text-end">
//                             <p className="text-muted mb-0 small">${item.price}</p>
//                           </div>
//                         </div>
//                         <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
//                       </CardBody>
//                     </Card>
//                   ))}
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Sub Total</span> (${subTotal.toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">GST(18%)</span> (${(grandTotal - subTotal).toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <p className="text-muted mb-0">Order Date: {getCurrentDate()}</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Delivery Charges</span> $5.00
//                     </p>
//                   </div>
//                 </CardBody>
//                 <div className="card-footer border-0 px-4 py-3">
//                   <h5 className="d-flex align-items-center justify-content-end text-uppercase mb-0">
//                     Total Price: <span className="h2 mb-0 ms-2">${grandTotal.toFixed(2)}</span>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 payment-cards-options">
//               <Card className="addressCard my-4" style={{ padding: '10px', textAlign: 'left' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                   Address
//                 </CardTitle>
//                 <CardHeader className="d-flex justify-content-between">
//                   <span>Deliver to: Anand Nagar, Press colony, Madhya Pradesh Bhopal - 462022</span>
//                 </CardHeader>
//                 <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                   <Button color="link" style={{ color: 'black' }} className="ml-auto">
//                     Change
//                   </Button>
//                 </div>
//               </Card>
//               <Card className="p-3" style={{ textAlign: 'left' }}>
//                 <div className="paymentinputs">
//                   <div className="payment-panel panel">
//                     <div className="checkout-overlay" style={{ display: 'none' }}></div>
//                     <CardTitle className="mb-4" tag="h4">
//                       PAYMENT
//                     </CardTitle>
//                     <div className="payment-content clearfix panel-body" style={{ display: 'block' }}>
//                       <div className="couponM-container mob clearfix">
//                         <FormGroup>
//                           <legend className="col-form-label col-sm-12">Payment Options</legend>
//                           <div className="list-group">
//                             <label className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(55, 55, 55, 0.101)' }}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="card"
//                                 checked={false}
//                                 disabled={true} // Disable Cards option
//                               />
//                               Card <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                             </label>
//                             <label className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(55, 55, 55, 0.101)' }}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="netBanking"
//                                 checked={false}
//                                 disabled={true} // Disable Net Banking option
//                               />
//                               Net Banking <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                             </label>
//                             <label className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(55, 55, 55, 0.101)' }}>
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="wallets"
//                                 checked={false}
//                                 disabled={true} // Disable Wallets option
//                               />
//                               Wallets <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                             </label>
//                             <label className="list-group-item list-group-item-action">
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="cod"
//                                 checked={true} // Select Cash on Delivery (COD) as default
//                                 disabled={false} // Enable selecting the "Cash on Delivery (COD)" option
//                               />
//                               Cash on Delivery (COD)
//                             </label>
//                           </div>
//                         </FormGroup>

//                       </div>
//                       <div className="tabbable tabs-left juspay-tabbable"></div>
//                     </div>
//                     <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                       <Button color="warning" className="mt-3 text-end">
//                         Proceed
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CheckOut;



// import React, { useState, useEffect } from 'react';
// import { Card, CardBody, CardImg, Button, CardHeader, CardTitle, FormGroup, Input } from 'reactstrap';
// import axios from 'axios';
// import base_URL from '../api/BootAPI';
// import AddAddress from './AddAdderss';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';






// const CheckOut = () => {

//   const [cartItems, setCartItems] = useState([]);
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [subTotal, setSubTotal] = useState(0);
//   const [paymentOption, setPaymentOption] = useState('cod');
//   const [showAddAddress, setShowAddAddress] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);
//   const navigate = useNavigate();
//   const [date, setDate] = useState()
//   const [time, setTime] = useState()
//   const [isLoading, setIsLoading] = useState(true);
//   const [orderDetails, setOrderDetails] = useState({
//     customerId: 1,
//     amountPaid: 0,
//     modeOfPayment: 'Credit Card',
//     orderStatus: 'ISDUJGFAIOSUDHF',
//     quantity: 0,
//     orderProducts: [],
//     shippingAddress: [
//       {
//         fullName: '',
//         mobileNumber: null,
//         flatNumber: null,
//         city: null,
//         pincode: null,
//         state: null
//       }
//     ]
//   });



//   useEffect(() => {
//     // Simulate loading for 3 seconds
//     document.title = 'Check Out';
//     const timeout = setTimeout(() => {
      
//       setIsLoading(false);
//     }, 3000);

//     return () => {
//       clearTimeout(timeout); // Clear the timeout when the component unmounts
//     };
//   }, []);

//   const selectAddressHandle = (selectAddress) => {
//     setSelectedAddress(selectAddress);
//     setOrderDetails((prevDetails) => ({
//       ...prevDetails,
//       shippingAddress: [
//         {
//           fullName: userProfile.fullName,
//           mobileNumber: userProfile.mobileNumber,
//           flatNumber: selectAddress.flatNumber,
//           colonyName: selectAddress.colonyName,
//           city: selectAddress.city,
//           pincode: selectAddress.pincode,
//           state: selectAddress.state
//         }
//       ]
//     }));
//   };

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("USER"));
//     // const adminx = JSON.parse(localStorage.getItem('ADMIN'));
//     if (user === null) {
//       navigate('/login')
//     } else {
//       fetchUserData();
//       fetchCartItems();
//     }



   
//   }, []);

//   useEffect(() => {
//     calculateGrandTotal(cartItems);
//   }, [cartItems]);

//   const fetchUserData = () => {
//     const user = JSON.parse(localStorage.getItem("USER"));
//     axios
//       .get(`${base_URL}/profiles/ ${user.profileId }`)
//       .then((response) => {
//         setUserProfile(response.data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };
//   const fetchCartItems = () => {
//     axios
//       .get(`${base_URL}/cart`)
//       .then((response) => {
//         setCartItems(response.data);
//         calculateGrandTotal(response.data);



//         const orderDate = new Date(response.data.orderDate);
//         const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
//         const t = orderDate.toLocaleString('en-US', timeOptions);

//         const dateOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
//         const d = orderDate.toLocaleString('en-US', dateOptions);

//         setTime(t); // Extract time
//         setDate(d); // Extract date
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   const calculateGrandTotal = (items) => {
//     let total = 0;
//     items.forEach((item) => {
//       total += item.price * item.quantity;
//     });
//     const gst = total * 0.18; // Assuming GST rate of 18%
//     const deleveryCharge = 5;
//     setGrandTotal(deleveryCharge +total + gst );
//     setSubTotal(total );
// console.log('Total:', total,gst, deleveryCharge, grandTotal)
//     setOrderDetails((prevDetails) => ({
//       ...prevDetails,
//       amountPaid: grandTotal,
//       quantity: items.length,
//       orderProducts: items.map((item) => ({
//         productName: item.productName,
//         image: item.image[0],
//         price: item.price,
//         quantity: item.quantity
//       }))
//     }));
//   };

//   const getCurrentDate = () => {
//     const date = new Date();

//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     let hours = date.getHours();
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12;
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = String(date.getFullYear()).slice(-2);

//     return `${minutes}${hours}: ${ampm} ${day}-${month}-${year}`;
//   };

//   console.log(getCurrentDate());


//   const handlePaymentOptionChange = (event) => {
//     setPaymentOption(event.target.value);
//   };


//   const handleProceed = () => {
//     const updatedOrderDetails = {
//       ...orderDetails,
//       orderStatus: 'In trans',
//       modeOfPayment: paymentOption,

//     };

//     console.log(updatedOrderDetails);
//     console.log(updatedOrderDetails.orderProducts[0].image);

//     axios
//       .post(`${base_URL}/order`, updatedOrderDetails)
//       .then((response) => {
//         console.log('Order placed successfully:', response.data);
//         // Perform any additional actions after placing the order

//         // toast('Product added to cart successfully!', { autoClose: 2000 });
//         toast.success('Product added to cart successfully!', { autoClose: 2000 });
//         axios.delete(`${base_URL}/cart/clear`)
//           .then((response) => {
//             console.log('cartdeleate  successfully:', response.data);
//             // Perform any additional actions after placing the order

//           })
//           .catch((error) => {
//             console.log('Error:', error);
//           });


//         navigate('/profile/orderHistory');
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   const enableAddAddressComponent = () => {
//     setShowAddAddress(true);
//   };

//   const disableAddAddressComponent = () => {
//     setShowAddAddress(false);
//   };




//   return (
//     <>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row justify-content-center align-items-center h-100">
//             <div className="col-lg-8">
//               <div className="card rounded-10">
//                 <CardBody className="p-4">
//                   <div className="d-flex justify-content-between align-items-center mb-4">
//                     <h3 className="lead fw-normal mb-0" style={{ color: 'black' }}>
//                       {`Items (${cartItems.length})`}
//                     </h3>
//                     <p className="small text-muted mb-0">Order Id: 788152</p>
//                   </div>
//                   {cartItems.map((item) => (
//                     <Card className="shadow-sm border mb-4" key={item.productId}>
//                       <CardBody>
//                         <div className="d-flex align-items-center">
//                           <div className="col-md-2" style={{ width: "90px" }}>
//                             <CardImg src={item.image} alt="Product" className="img-fluid" />
//                           </div>
//                           <div className="col-md-4">
//                             <p className="text-muted mb-0">{item.productName}</p>
//                           </div>
//                           <div className="col-md-3 text-end">
//                             <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
//                           </div>
//                           <div className="col-md-3 d-flex justify-content-end text-end">
//                             <p className="text-muted fw-bold mb-0 me-4">${item.price}</p>
//                           </div>
//                         </div>
//                         <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
//                       </CardBody>
//                     </Card>
//                   ))}
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Sub Total</span> (${subTotal.toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="text-muted mb-0">Order Date: {getCurrentDate()}</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">GST(18%)</span> (${( subTotal *.18).toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <p className="text-muted mb-0"></p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Delivery Charges</span> $5.00
//                     </p>
//                   </div>
//                 </CardBody>
//                 <div className="card-footer border-0 px-4 py-3">
//                   <h5 className="d-flex align-items-center justify-content-end text-uppercase mb-0">
//                     Total Price: <span className="h2 mb-0 ms-2">${grandTotal.toFixed(2)}</span>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 payment-cards-options">
//               <Card className="addressCard my-4" style={{ padding: '10px', textAlign: 'left' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                   Address
//                 </CardTitle>



//                 <CardHeader className="d-flex justify-content-between">
//                   {selectedAddress ? (
//                     <span>Deliver to: {selectedAddress.flatNumber}, {selectedAddress.colonyName},{selectedAddress.city}, {selectedAddress.pincode}, {selectedAddress.state}</span>
//                   ) : (
//                     <span>Select Address</span>
//                   )}


//                 </CardHeader>
//                 <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                   <Button color="link" style={{ color: 'black' }} className="ml-auto" onClick={enableAddAddressComponent}>
//                     Change
//                   </Button>
//                 </div>
//               </Card>
//               <Card className="p-3" style={{ textAlign: 'left' }}>
//                 <div className="paymentinputs">
//                   <div className="payment-panel panel">
//                     <div className="checkout-overlay" style={{ display: 'none' }}></div>
//                     <CardTitle className="mb-4" tag="h4">
//                       PAYMENT
//                     </CardTitle>
//                     <div className="payment-content clearfix panel-body" style={{ display: 'block' }}>
//                       <div className="couponM-container mob clearfix">
//                         <FormGroup>
//                           <legend className="col-form-label col-sm-12">Payment Options</legend>
//                           <div className="list-group">
//                             <label className="list-group-item list-group-item-action">
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="card"
//                                 checked={paymentOption === 'card'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled
//                               />
//                               Card <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                             </label>
//                             <label className="list-group-item list-group-item-action">
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="netBanking"
//                                 checked={paymentOption === 'netBanking'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled
//                               />
//                               Net Banking <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                             </label>
//                             <label className="list-group-item list-group-item-action">
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="wallets"
//                                 checked={paymentOption === 'wallets'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled
//                               />
//                               Wallets <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                             </label>
//                             <label className="list-group-item list-group-item-action">
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="cod"
//                                 checked={paymentOption === 'cod'}
//                                 onChange={handlePaymentOptionChange}
//                               />
//                               Cash on Delivery (COD)
//                             </label>
//                           </div>
//                         </FormGroup>
//                       </div>
//                       <div className="tabbable tabs-left juspay-tabbable"></div>
//                     </div>
//                     <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                       <Button color="warning" className="mt-3 text-end" onClick={handleProceed}>
//                         Proceed
//                       </Button>



//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Render the AddAddress component */}
//       {showAddAddress && <AddAddress selectAddressHandle={selectAddressHandle} onClose={disableAddAddressComponent} />}
//     </>
//   );
// };

// export default CheckOut;


import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardImg, Button, CardHeader, CardTitle, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_URL from '../api/BootAPI';
import AddAddress from './AddAdderss';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2';







const CheckOut = () => {

  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [paymentOption, setPaymentOption] = useState('cod');
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState({
    customerId: 1,
    amountPaid: 0,
    modeOfPayment: 'Credit Card',
    orderStatus: 'ISDUJGFAIOSUDHF',
    quantity: 0,
    orderProducts: [],
    shippingAddress: [
      {
        fullName: '',
        mobileNumber: null,
        flatNumber: null,
        city: null,
        pincode: null,
        state: null
      }
    ]
  });




  const showAlert = () => {
    Swal.fire('Success!', 'Your order has been placed.', 'success').then(() => {
      // Redirect to another page
      window.location.href =( 'profile/OrderHistory');
    });
  };




  useEffect(() => {
    // Simulate loading for 3 seconds
    document.title = 'Check Out';
    const timeout = setTimeout(() => {
      
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout); // Clear the timeout when the component unmounts
    };
  }, []);

  const selectAddressHandle = (selectAddress) => {
    setSelectedAddress(selectAddress);
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      shippingAddress: [
        {
          fullName: userProfile.fullName,
          mobileNumber: userProfile.mobileNumber,
          flatNumber: selectAddress.flatNumber,
          colonyName: selectAddress.colonyName,
          city: selectAddress.city,
          pincode: selectAddress.pincode,
          state: selectAddress.state
        }
      ]
    }));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("USER"));
    // const adminx = JSON.parse(localStorage.getItem('ADMIN'));
    if (user === null) {
      navigate('/login')
    } else {
      fetchUserData();
      fetchCartItems();
    }



   
  }, []);

  useEffect(() => {
    calculateGrandTotal(cartItems);
  }, [cartItems]);

  const fetchUserData = () => {
    const user = JSON.parse(localStorage.getItem("USER"));
    axios
      .get(`${base_URL}/profiles/ ${user.profileId }`)
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  const fetchCartItems = () => {
    axios
      .get(`${base_URL}/cart`)
      .then((response) => {
        setCartItems(response.data);
        calculateGrandTotal(response.data);



        const orderDate = new Date(response.data.orderDate);
        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const t = orderDate.toLocaleString('en-US', timeOptions);

        const dateOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
        const d = orderDate.toLocaleString('en-US', dateOptions);

        setTime(t); // Extract time
        setDate(d); // Extract date
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const calculateGrandTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    const gst = total * 0.18; // Assuming GST rate of 18%
    const deleveryCharge = 5;
    setGrandTotal(deleveryCharge +total + gst );
    setSubTotal(total );
console.log('Total:', total,gst, deleveryCharge, grandTotal)
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      amountPaid: grandTotal,
      quantity: items.length,
      orderProducts: items.map((item) => ({
        productName: item.productName,
        image: item.image[0],
        price: item.price,
        quantity: item.quantity
      }))
    }));
  };

  const getCurrentDate = () => {
    const date = new Date();

    const minutes = String(date.getMinutes()).padStart(2, '0');
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);

    return `${minutes}${hours}: ${ampm} ${day}-${month}-${year}`;
  };

  console.log(getCurrentDate());


  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };


  const handleProceed = () => {
    const updatedOrderDetails = {
      ...orderDetails,
      orderStatus: 'In trans',
      modeOfPayment: paymentOption,

    };

    console.log(updatedOrderDetails);
    console.log(updatedOrderDetails.orderProducts[0].image);

    axios
      .post(`${base_URL}/order`, updatedOrderDetails)
      .then((response) => {
        console.log('Order placed successfully:', response.data);
        // Perform any additional actions after placing the order

        // toast('Product added to cart successfully!', { autoClose: 2000 });
        toast.success('Product added to cart successfully!', { autoClose: 2000 });
        axios.delete(`${base_URL}/cart/clear`)
          .then((response) => {
            console.log('cartdeleate  successfully:', response.data);
            // Perform any additional actions after placing the order

          })
          .catch((error) => {
            console.log('Error:', error);
          });


        navigate('/profile/orderHistory');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const enableAddAddressComponent = () => {
    setShowAddAddress(true);
  };

  const disableAddAddressComponent = () => {
    setShowAddAddress(false);
  };




  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-8">
              <div className="card rounded-10">
                <CardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="lead fw-normal mb-0" style={{ color: 'black' }}>
                      {`Items (${cartItems.length})`}
                    </h3>
                    <p className="small text-muted mb-0">Order Id: 788152</p>
                  </div>
                  {cartItems.map((item) => (
                    <Card className="shadow-sm border mb-4" key={item.productId}>
                      <CardBody>
                        <div className="d-flex align-items-center">
                          <div className="col-md-2" style={{ width: "90px" }}>
                            <CardImg src={item.image} alt="Product" className="img-fluid" />
                          </div>
                          <div className="col-md-4">
                            <p className="text-muted mb-0">{item.productName}</p>
                          </div>
                          <div className="col-md-3 text-end">
                            <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
                          </div>
                          <div className="col-md-3 d-flex justify-content-end text-end">
                            <p className="text-muted fw-bold mb-0 me-4">${item.price}</p>
                          </div>
                        </div>
                        <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                      </CardBody>
                    </Card>
                  ))}
                  <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Order Details</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Sub Total</span> (${subTotal.toFixed(2)})
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">Order Date: {getCurrentDate()}</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">GST(18%)</span> (${( subTotal *.18).toFixed(2)})
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0"></p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Delivery Charges</span> $5.00
                    </p>
                  </div>
                </CardBody>
                <div className="card-footer border-0 px-4 py-3">
                  <h5 className="d-flex align-items-center justify-content-end text-uppercase mb-0">
                    Total Price: <span className="h2 mb-0 ms-2">${grandTotal.toFixed(2)}</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 payment-cards-options">
              <Card className="addressCard my-4" style={{ padding: '10px', textAlign: 'left' }}>
                <CardTitle className="mb-4" tag="h4">
                  Address
                </CardTitle>



                <CardHeader className="d-flex justify-content-between">
                  {selectedAddress ? (
                    <span>Deliver to: {selectedAddress.flatNumber}, {selectedAddress.colonyName},{selectedAddress.city}, {selectedAddress.pincode}, {selectedAddress.state}</span>
                  ) : (
                    <span>Select Address</span>
                  )}


                </CardHeader>
                <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button color="link" style={{ color: 'black' }} className="ml-auto" onClick={enableAddAddressComponent}>
                    Change
                  </Button>
                </div>
              </Card>
              <Card className="p-3" style={{ textAlign: 'left' }}>
                <div className="paymentinputs">
                  <div className="payment-panel panel">
                    <div className="checkout-overlay" style={{ display: 'none' }}></div>
                    <CardTitle className="mb-4" tag="h4">
                      PAYMENT
                    </CardTitle>
                    <div className="payment-content clearfix panel-body" style={{ display: 'block' }}>
                      <div className="couponM-container mob clearfix">
                        <FormGroup>
                          <legend className="col-form-label col-sm-12">Payment Options</legend>
                          <div className="list-group">
                            <label className="list-group-item list-group-item-action">
                              <Input
                                name="paymentOption"
                                type="radio"
                                value="card"
                                checked={paymentOption === 'card'}
                                onChange={handlePaymentOptionChange}
                                disabled
                              />
                              Card <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
                            </label>
                            <label className="list-group-item list-group-item-action">
                              <Input
                                name="paymentOption"
                                type="radio"
                                value="netBanking"
                                checked={paymentOption === 'netBanking'}
                                onChange={handlePaymentOptionChange}
                                disabled
                              />
                              Net Banking <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
                            </label>
                            <label className="list-group-item list-group-item-action">
                              <Input
                                name="paymentOption"
                                type="radio"
                                value="wallets"
                                checked={paymentOption === 'wallets'}
                                onChange={handlePaymentOptionChange}
                                disabled
                              />
                              Wallets <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
                            </label>
                            <label className="list-group-item list-group-item-action">
                              <Input
                                name="paymentOption"
                                type="radio"
                                value="cod"
                                checked={paymentOption === 'cod'}
                                onChange={handlePaymentOptionChange}
                              />
                              Cash on Delivery (COD)
                            </label>
                          </div>
                        </FormGroup>
                      </div>
                      <div className="tabbable tabs-left juspay-tabbable"></div>
                    </div>
                    <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button color="warning" className="mt-3 text-end" onClick={ showAlert}>
                        Proceed
                      </Button>



                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Render the AddAddress component */}
      {showAddAddress && <AddAddress selectAddressHandle={selectAddressHandle} onClose={disableAddAddressComponent} />}
    </>
  );
};

export default CheckOut;








// import React, { useState, useEffect } from 'react';
// import { Card, CardBody, CardImg, Button, CardHeader, CardTitle, FormGroup, Input } from 'reactstrap';
// import axios from 'axios';
// import base_URL from '../api/BootAPI';
// import AddAddress from './AddAdderss';

// const CheckOut = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [subTotal, setSubTotal] = useState(0);
//   const [paymentOption, setPaymentOption] = useState('cod');
//   const [showAddAddress, setShowAddAddress] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [orderDate, setOrderDate] = useState(null);
//   const [amountPaid, setAmountPaid] = useState(0);
//   const [orderStatus, setOrderStatus] = useState('canceled');

//   const selectAddressHandle = (selectAddress) => {
//     setSelectedAddress(selectAddress);
//   }

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   useEffect(() => {
//     calculateGrandTotal(cartItems);
//   }, [cartItems]);

//   const fetchCartItems = () => {
//     axios
//       .get(`${base_URL}/cart`)
//       .then((response) => {
//         setCartItems(response.data);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   const calculateGrandTotal = (items) => {
//     let total = 0;
//     items.forEach((item) => {
//       total += item.price * item.quantity;
//     });
//     const gst = total * 0.18; // Assuming GST rate of 18%
//     setGrandTotal(total + gst);
//     setSubTotal(total);
//   };

//   const getCurrentDate = () => {
//     const date = new Date();
//     return date.toISOString();
//   };

//   const handlePaymentOptionChange = (event) => {
//     setPaymentOption(event.target.value);
//   };

//   const handleProceed = () => {
//     const orderProducts = cartItems.map((item) => ({
//       productName: item.productName,
//       image: item.image,
//       price: item.price,
//     }));

//     const shippingAddress = [
//       {
//         fullName: selectedAddress.fullName,
//         mobileNumber: selectedAddress.mobileNumber,
//         flatNumber: selectedAddress.flatNumber,
//         city: selectedAddress.city,
//         pincode: selectedAddress.pincode,
//         state: selectedAddress.state,
//       },
//     ];

//     const orderDetails = {
//       orderDate: getCurrentDate(),
//       customerId: 456,
//       amountPaid: grandTotal,
//       modeOfPayment: paymentOption,
//       orderStatus: orderStatus,
//       quantity: cartItems.length,
//       orderProducts: orderProducts,
//       shippingAddress: shippingAddress,
//     };

//     axios
//       .post(`${base_URL}/orders`, orderDetails)
//       .then((response) => {
//         console.log('Order placed successfully:', response.data);
//         // Perform any additional actions after placing the order
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   const enableAddAddressComponent = () => {
//     setShowAddAddress(true);
//   };

//   const disableAddAddressComponent = () => {
//     setShowAddAddress(false);
//   };
//   return (
//     <>
//       <section className="h-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row justify-content-center align-items-center h-100">
//             <div className="col-lg-8">
//               <div className="card rounded-10">
//                 <CardBody className="p-4">
//                   <div className="d-flex justify-content-between align-items-center mb-4">
//                     <h3 className="lead fw-normal mb-0" style={{ color: 'black' }}>
//                       {`Items (${cartItems.length})`}
//                     </h3>
//                     <p className="small text-muted mb-0">Order Id: 788152</p>
//                   </div>
//                   {cartItems.map((item) => (
//                     <Card className="shadow-sm border mb-4" key={item.productId}>
//                       <CardBody>
//                         <div className="d-flex align-items-center">
//                           <div className="col-md-2">
//                             <CardImg src={item.image} alt="Product" className="img-fluid" />
//                           </div>
//                           <div className="col-md-4">
//                             <p className="text-muted mb-0">{item.productName}</p>
//                           </div>
//                           <div className="col-md-3 text-end">
//                             <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
//                           </div>
//                           <div className="col-md-3 d-flex justify-content-end text-end">
//                             <p className="text-muted mb-0 small">${item.price}</p>
//                           </div>
//                         </div>
//                         <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
//                       </CardBody>
//                     </Card>
//                   ))}
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Sub Total</span> (${subTotal.toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">GST(18%)</span> (${(grandTotal - subTotal).toFixed(2)})
//                     </p>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <p className="text-muted mb-0">Order Date: {getCurrentDate()}</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Delivery Charges</span> $5.00
//                     </p>
//                   </div>
//                 </CardBody>
//                 <div className="card-footer border-0 px-4 py-3">
//                   <h5 className="d-flex align-items-center justify-content-end text-uppercase mb-0">
//                     Total Price: <span className="h2 mb-0 ms-2">${grandTotal.toFixed(2)}</span>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 payment-cards-options">
//               <Card className="addressCard my-4" style={{ padding: '10px', textAlign: 'left' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                   Address
//                 </CardTitle>



//                 <CardHeader className="d-flex justify-content-between">
//                   {selectedAddress ? (
//                     <span>Deliver to: {selectedAddress.addressId}</span>
//                   ) : (
//                     <span>Select Address</span>
//                   )}


//                 </CardHeader>
//                 <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                   <Button color="link" style={{ color: 'black' }} className="ml-auto" onClick={enableAddAddressComponent}>
//                     Change
//                   </Button>
//                 </div>
//               </Card>
//               <Card className="p-3" style={{ textAlign: 'left' }}>
//                 <div className="paymentinputs">
//                   <div className="payment-panel panel">
//                     <div className="checkout-overlay" style={{ display: 'none' }}></div>
//                     <CardTitle className="mb-4" tag="h4">
//                       PAYMENT
//                     </CardTitle>
//                     <div className="payment-content clearfix panel-body" style={{ display: 'block' }}>
//                       <div className="couponM-container mob clearfix">
//                         <FormGroup>
//                           <legend className="col-form-label col-sm-12">Payment Options</legend>
//                           <div className="list-group">
//                             <label className="list-group-item list-group-item-action">
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="card"
//                                 checked={paymentOption === 'card'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled
//                               />
//                               Card <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                             </label>
//                             <label className="list-group-item list-group-item-action">
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="netBanking"
//                                 checked={paymentOption === 'netBanking'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled
//                               />
//                               Net Banking <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                             </label>
//                             <label className="list-group-item list-group-item-action">
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="wallets"
//                                 checked={paymentOption === 'wallets'}
//                                 onChange={handlePaymentOptionChange}
//                                 disabled
//                               />
//                               Wallets <span style={{ color: 'red', fontSize: '11px' }}>(Not Available)</span>
//                             </label>
//                             <label className="list-group-item list-group-item-action">
//                               <Input
//                                 name="paymentOption"
//                                 type="radio"
//                                 value="cod"
//                                 checked={paymentOption === 'cod'}
//                                 onChange={handlePaymentOptionChange}
//                               />
//                               Cash on Delivery (COD)
//                             </label>
//                           </div>
//                         </FormGroup>
//                       </div>
//                       <div className="tabbable tabs-left juspay-tabbable"></div>
//                     </div>
//                     <div className="payment-footer footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                       <Button color="warning" className="mt-3 text-end">
//                         Proceed
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Render the AddAddress component */}
//       {showAddAddress && <AddAddress selectAddressHandle={selectAddressHandle} onClose={disableAddAddressComponent} />}
//     </>
//   );
// };

// export default CheckOut;


