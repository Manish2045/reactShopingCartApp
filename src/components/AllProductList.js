// // import React from 'react'

// // function AllProductList() {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default AllProductList



// // import React, { useState } from 'react';
// // import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

// // const ProductCard = ({ product, userName }) => {
// //     const [cartQty, setCartQty] = useState(0);

// //     const addToCart = () => {
// //         // Add to cart logic here
// //         setCartQty(1);
// //     };

// //     const removeFromCart = () => {
// //         // Remove from cart logic here
// //         setCartQty(0);
// //     };

// //     return (
// //         <div className="col-sm-4" style={{ height: '350px' }}>
// //             <Card>
// //                 <CardImg top src={product.image} alt="Product" style={{ height: '150px', maxWidth: '180px' }} />
// //                 <CardBody>
// //                     <CardTitle>{product.name}</CardTitle>
// //                     <CardText>{product.description}</CardText>
// //                     <CardText>Rs {product.price}</CardText>
// //                     <Button color="success" onClick={cartQty === 0 ? addToCart : removeFromCart}>
// //                         {cartQty === 0 ? 'Add to Cart' : 'Remove from Cart'}
// //                     </Button>
// //                 </CardBody>
// //             </Card>
// //         </div>
// //     );
// // };

// // const AllProductList = ({ userName }) => {
// //     const products = [
// //         {
// //             id: 1,
// //             name: 'Product 1',
// //             description: 'This is product 1 description.',
// //             price: 10,
// //             image: './product1.jpg',
// //         },
// //         {
// //             id: 2,
// //             name: 'Product 2',
// //             description: 'This is product 2 description.',
// //             price: 20,
// //             image: './product2.jpg',
// //         },
// //         {
// //             id: 3,
// //             name: 'Product 3',
// //             description: 'This is product 3 description.',
// //             price: 30,
// //             image: './product3.jpg',
// //         },
// //     ];

// //     return (
// //         <div className="row text-center">
// //             {products.map((product) => (
// //                 <ProductCard key={product.id} product={product} userName={userName} />
// //             ))}
// //         </div>
// //     );
// // };

// // export default AllProductList;





// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
// import base_URL from '../api/BootAPI';

// const ProductCard = ({ product, userName }) => {
//     const [cartQty, setCartQty] = useState(0);

//     const addToCart = () => {

//         axios.get(`${base_URL}/cart/productId`)
//             .then((response) => {
//                 // Handle the response if needed
//                 if (response.data) {
//                     const productQuntity = response.data.quantity + 1
//                     axios.put(`${base_URL}/cart/productId`, {
//                         productName: '9.99',
//                         quantity: productQuntity,
//                         price: 43656
//                     })
//                         .then((response) => {
//                             // Handle the response if needed
//                             setCartQty(1);
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 } else {
//                     axios.put(`${base_URL}/cart`, {
//                         productId: 3545,
//                         productName: '9.99',
//                         quantity: 2,
//                         price: 43656
//                     })
//                         .then((response) => {
//                             // Handle the response if needed
//                             setCartQty(1);
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 }
//                 setCartQty(1);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const removeFromCart = () => {
//         // Remove from cart logic here
//         setCartQty(0);
//     };

//     return (
//         <div className="col-sm-4" style={{ height: '350px' }}>
//             <Card style={{textAlign: 'left'}}>
//                 <CardImg top src={product.image} alt="Product" style={{ height: '240px', maxWidth: '180px' }} />
//                 <CardBody>
//                     <CardTitle>{product.productName}</CardTitle>
                   
//                     <CardText style={{display: 'flex', justifyContent: 'space-between', paddingRight:'20px'}} >Rs {product.price}
                    
//                         <Button color="success" onClick={cartQty === 0 ? addToCart : removeFromCart}>
//                             {cartQty === 0 ? 'Add to Cart' : 'Remove from Cart'}
//                         </Button>
//                     </CardText>
                    
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// const AllProductList = ({ userName }) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         getAllProducts();
//     }, []);

//     const getAllProducts = () => {
//         axios.get(`${base_URL}/products`)
//             .then((response) => {
//                 console.log('Response:', response.data);
//                 setProducts(response.data);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     return (
//         <div className="row text-center px-5" style={{display:'flex',justifyContent:'center' }}>
//             <div className="row text-center px-3" style={{width: '90%'}}>
//                 {products.map((product) => (
//                     <ProductCard key={product.productId} product={product} userName={userName} />
//                 ))}
//            </div>
//         </div>
//     );
// };

// export default AllProductList;



// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
// import base_URL from '../api/BootAPI';

// const ProductCard = ({ product, userName }) => {
//     const [cartQty, setCartQty] = useState(0);

//     const addToCart = () => {
//         axios.get(`${base_URL}/cart/${product.productId}`)
//             .then((response) => {
//                 if (response.data) {

//                     const product = {
//                         productName: response.data.productName,
//                         quantity: response.data.quantity +1,
//                         price: response.data.price
//                     }
//                     axios.put(`${base_URL}/cart/${product.productId}`, {product})
//                         .then((response) => {
//                             console.log('data:', response.data);
//                             setCartQty(response.data.quantity + 1);
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 } else {
//                     const product = {
//                         productName: response.data.response.dataName,
//                         quantity: response.data.quantity,
//                         price: response.data.price
//                     }
//                     axios.post(`${base_URL}/cart`, {product})
//                         .then((response) => {
//                             console.log('data:', response.data);

//                             setCartQty(1);
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const removeFromCart = () => {
//         axios.delete(`${base_URL}/cart/${product.productId}`)
//             .then((response) => {
//                 setCartQty(0);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     // useEffect(() => {
//     //     axios.get(`${base_URL}/cart`)
//     //         .then((response) => {
//     //             if (response.data) {
//     //                 setCartQty(response.data.quantity);
//     //             }
//     //         })
//     //         .catch((error) => {
//     //             console.log('Error:', error);
//     //         });
//     // }, [product.productId]);

//     return (
//         <div className="col-sm-4" style={{ height: '350px' }}>
//             <Card style={{ textAlign: 'left' }}>
//                 <CardImg top src={product.image} alt="Product" style={{ height: '240px', maxWidth: '180px' }} />
//                 <CardBody>
//                     <CardTitle>{product.productName}</CardTitle>
//                     <CardText style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>
//                         Rs {product.price}
//                         <Button color="success" onClick={cartQty === 0 ? addToCart : removeFromCart}>
//                             {cartQty === 0 ? 'Add to Cart' : 'Remove from Cart'}
//                         </Button>
//                     </CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// const AllProductList = ({ userName }) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         getAllProducts();
//     }, []);

//     const getAllProducts = () => {
//         axios.get(`${base_URL}/products`)
//             .then((response) => {
//                 console.log('Response:', response.data);
//                 setProducts(response.data);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     return (
//         <div className="row text-center px-5" style={{ display: 'flex', justifyContent: 'center' }}>
//             <div className="row text-center px-3" style={{ width: '90%' }}>
//                 {products.map((product) => (
//                     <ProductCard key={product.productId} product={product} userName={userName} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllProductList;



// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import { useParams } from 'react-router-dom';

// const ProductCard = ({ product, userName }) => {
//     const [cartQty, setCartQty] = useState(0);

//     useEffect(() => {
//         axios.get(`${base_URL}/cart/${product.productId}`)
//             .then((response) => {
//                 if (response.data) {
//                     setCartQty(response.data.quantity);
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     }, [product.productId]);

//     const addToCart = () => {
//         axios.get(`${base_URL}/cart/${product.productId}`)
//             .then((response) => {
//                 if (response.data) {
//                     const updatedProduct = {
//                         ...response.data,
//                         quantity: response.data.quantity + 1
//                     };
//                     axios.put(`${base_URL}/cart/${product.productId}`, updatedProduct)
//                         .then((response) => {
//                             console.log('data:', response.data);
//                             setCartQty(response.data.quantity);
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 } else {
//                     const newProduct = {
//                         productName: product.productName,
//                         quantity: 1,
//                         price: product.price
//                     };
//                     axios.post(`${base_URL}/cart`, newProduct)
//                         .then((response) => {
//                             console.log('data:', response.data);
//                             setCartQty(response.data.quantity);
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const removeFromCart = () => {
//         axios.delete(`${base_URL}/cart/${product.productId}`)
//             .then(() => {
//                 setCartQty(0);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     return (
//         <div className="col-sm-4" style={{ height: '350px' }}>
//             <Card style={{ textAlign: 'left' }}>
//                 <CardImg top src={product.image} alt="Product" style={{ height: '240px', maxWidth: '180px' }} />
//                 <CardBody>
//                     <CardTitle>{product.productName}</CardTitle>
//                     <CardText style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>
//                         Rs {product.price}
//                         <Button color="success" onClick={cartQty === 0 ? addToCart : removeFromCart}>
//                             {cartQty === 0 ? 'Add to Cart' : 'Remove from Cart'}
//                         </Button>
//                     </CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// const AllProductList = ({ userName }) => {
//     const [products, setProducts] = useState([]);
//     const { category } = useParams();

//     useEffect(() => {
//         getAllProducts();
//     }, []);

//     const setProductsConstant = (productss) => {
//             setProducts(productss)
//         }
//     const getAllProducts = () => {
//         axios.get(`${base_URL}/products`)
//             .then((response) => {
//                 console.log('Response:', response.data);
//                 // setProducts(response.data);





//                 if (category) {

//                     if (category === 'All') {
//                         console.log("category true", response.data)
//                         setProducts(response.data);
//                         console.log("products", products)
//                     }
//                     else if (response.data && category !== 'Style-Hub') {
//                         const filteredProducts = response.data.filter((product) => {
//                             return product.category === 'Clothing' || product.category === 'Footwear' || product.category === 'Watches';
//                         });

//                         setProducts(filteredProducts);
//                     } else {
//                         const filteredProducts = response.data.filter((product) => product.category === category);
//                         setProducts(filteredProducts);
//                     }
//                 } else {
//                     setProductsConstant(response.data);

//                     console.log("category false", response.data)
//                     console.log("products", products)
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     return (
//         <div className="row text-center px-5" style={{ display: 'flex', justifyContent: 'center' }}>
//             <div className="row text-center px-3" style={{ width: '90%' }}>
//                 {products.map((product) => (
//                     <ProductCard key={product.productId} product={product} userName={userName} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllProductList;



// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardHeader } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import { useParams } from 'react-router-dom';

// const ProductCard = ({ product, userName }) => {
//     const [cartQty, setCartQty] = useState(0);

//     useEffect(() => {
//         axios.get(`${base_URL}/cart/${product.productId}`)
//             .then((response) => {
//                 if (response.data) {
//                     setCartQty(response.data.quantity);
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     }, [product.productId, product]);

//     const addToCart = () => {
//         axios.get(`${base_URL}/cart/${product.productId}`)
            
//             .then((response) => {
//                 console.log(response)
//                 if (response.data) {
//                     const updatedProduct = {
//                         ...response.data,
//                         quantity: response.data.quantity + 1
//                     };
//                     axios.put(`${base_URL}/cart/${product.productId}`, updatedProduct)
//                         .then((response) => {
//                             console.log('data:', response.data);
//                             setCartQty(response.data.quantity);
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 } else {
//                     const newProduct = {
//                         productId: product.productId,
//                         productName: product.productName,
//                         quantity: 1,
//                         price: product.price
//                     };
//                     axios.post(`${base_URL}/cart`, newProduct)
//                         .then((response) => {
//                             console.log('data:', response.data);
//                             setCartQty(response.data.quantity);
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const removeFromCart = () => {
//         axios.delete(`${base_URL}/cart/${product.productId}`)
//             .then(() => {
//                 setCartQty(0);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     return (
//         <div className="col-sm-4" style={{ height: '350px' }}>
//             <Card style={{ textAlign: 'left' }}>
//                 <CardImg top src={product.image} alt="Product" style={{ height: '240px', maxWidth: '180px' }} />
//                 <CardBody>
//                     <CardTitle>{product.productName}</CardTitle>
//                     <CardText style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>
//                         Rs {product.price}
//                         <Button color="success" onClick={cartQty === 0 ? addToCart : removeFromCart}>
//                             {cartQty === 0 ? 'Add to Cart' : 'Remove from Cart'}
//                         </Button>
//                     </CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// const AllProductList = ({ userName }) => {
//     const [products, setProducts] = useState([]);

//     const { category  } = useParams();

//     useEffect(() => {
//         getAllProducts();
//     }, []);

//     const getAllProducts = () => {
//         axios.get(`${base_URL}/products`)
//             .then((response) => {
                
//                 console.log(category )
//                 if (response.data && category  !== 'All') {
//                     console.log('Response:', response.data);

//                     const filteredProducts = response.data.filter(product => product.category  === category );
//                     console.log('Filtered Products:', filteredProducts);

//                     setProducts(filteredProducts);
//                 }
//                 else {
//                     setProducts(response.data);
//                 }
                
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };






//     return (
//         <div className="row text-center px-5" style={{ display: 'flex', justifyContent: 'center' }}>
//             <div className="row text-center px-3" style={{ width: '90%',}}>
//                 <CardHeader className='py-3' tag={"h3"} style={{textAlign: 'left'}}>
//                     All Products
//                 </CardHeader>
//                 {products.map((product) => (
//                     <ProductCard key={product.productId} product={product} userName={userName} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllProductList;










//     import axios from 'axios';
//     import React, { useState, useEffect } from 'react';
//     import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardHeader } from 'reactstrap';
//     import base_URL from '../api/BootAPI';
//     import { useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

//     const ProductCard = ({ product, userName }) => {
//         const [cartQty, setCartQty] = useState(0);
//         const [noOfProducts, setNoOfProducts] = useState();
//         useEffect(() => {
//             axios
//                 .get(`${base_URL}/cart/${product.productId}`)
//                 .then((response) => {
//                     if (response.data) {
//                         setCartQty(response.data.quantity);
//                     }
//                 })
//                 .catch((error) => {
//                     console.log('Error:', error);
//                 });
//         }, [product.productId, product]);

//         const addToCart = () => {
//             axios
//                 .get(`${base_URL}/cart/${product.productId}`)
//                 .then((response) => {
//                     console.log(response);
//                     if (response.data) {
//                         const updatedProduct = {
//                             ...response.data,
//                             quantity: response.data.quantity + 1,
//                         };
//                         axios
//                             .put(`${base_URL}/cart/${product.productId}`, updatedProduct)
//                             .then((response) => {
//                                 console.log('data:', response.data);
//                                 setCartQty(response.data.quantity);

//                                 toast.success('Form submitted successfully!', {
//                                     position: toast.POSITION.BOTTOM_CENTER
//                                 });
                            

//                             })
//                             .catch((error) => {
//                                 console.log('Error:', error);
//                             });
//                     } else {
//                         const newProduct = {
//                             productId: product.productId,
//                             productName: product.productName,
//                             quantity: 1,
//                             price: product.price,
//                         };
//                         axios
//                             .post(`${base_URL}/cart`, newProduct)
//                             .then((response) => {
//                                 console.log('data:', response.data);
//                                 setCartQty(response.data.quantity);



//                                 axios
//                                     .get(`${base_URL}/cart`)
//                                     .then((response) => {
//                                         console.log('data:', response.data);
//                                         ;



//                                         setNoOfProducts(response.data.lenght)
                                       
//                                         console.log('........................', response.data.lenght);
//                                         // toast.success('Form submitted successfully!', {
//                                         //     position: toast.POSITION.BOTTOM_CENTER
//                                         // });


//                                     })



//                                 toast.success('Form submitted successfully!', {
//                                     position: toast.POSITION.BOTTOM_CENTER
//                                 });
//                             })
//                             .catch((error) => {
//                                 console.log('Error:', error);
//                             });
//                     }
//                 })
//                 .catch((error) => {
//                     console.log('Error:', error);
//                 });
//         };

//         const removeFromCart = () => {
//             axios
//                 .delete(`${base_URL}/cart/${product.productId}`)
//                 .then(() => {
//                     setCartQty(0);
//                 })
//                 .catch((error) => {
//                     console.log('Error:', error);
//                 });
//         };

//         return (
//             <div className="col-sm-4" style={{ height: '350px' }}>
//                 <Card style={{ textAlign: 'left' }}>
//                     <CardImg top src={product.image} alt="Product" style={{ height: '240px', maxWidth: '180px' }} />
//                     <CardBody>
//                         <CardTitle>{product.productName}</CardTitle>
//                         <CardText style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>
//                             Rs {product.price}
//                             <Button color="success" onClick={cartQty === 0 ? addToCart : removeFromCart}>
//                                 {cartQty === 0 ? 'Add to Cart' : 'Remove from Cart'}
//                             </Button>
//                         </CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     };

//     const AllProductList = ({ userName }) => {
//         const [products, setProducts] = useState([]);
//         const { category } = useParams();

//         useEffect(() => {
//             getAllProducts();
//         }, [category]);



//        const setProductsConstant =(productss)=>{
//             setProducts(productss)
//         }

//         const getAllProducts = () => {
//             axios
//                 .get(`${base_URL}/products`)
//                 .then((response) => {
//                     console.log(category);


//                     setProducts(response.data)





//                         if (category) {
                            
//                             if (category === 'All') {
//                                 console.log("catagory true", response.data)
//                                 setProducts(response.data);
//                                 console.log("products", products)
//                             }
//                             else if (response.data && category !== 'Style-Hub') {
//                                 const filteredProducts = response.data.filter((product) => {
//                                     return product.category === 'Clothing' || product.category === 'Footwear' || product.category === 'Watches';
//                                 });

//                                 setProducts(filteredProducts);
//                             } else {
//                                 const filteredProducts = response.data.filter((product) => product.category === category);
//                                 setProducts(filteredProducts);
//                             }
//                         } else {
//                             setProductsConstant(response.data);

//                             console.log("category false", response.data)
//                             console.log("products",products)
//                         }
//                 })
//                 .catch((error) => {
//                     console.log('Error:', error);
//                 });
//         };




//         return (
//             <div className="row text-center px-5" style={{ display: 'flex', justifyContent: 'center' }}>
//                 <div className="row text-center px-3" style={{ width: '90%' }}>
//                     <CardHeader className="py-3" tag="h3" style={{ textAlign: 'left' }}>
//                         {category || "All"}
//                     </CardHeader>
//                     {products.map((product) =>
                        
//                             <ProductCard key={product.productId} product={product} userName={userName} />
                       
//                     )}
//                 </div>
//             </div>
//         );
//     };

//     export default AllProductList;




// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardHeader } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import { useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductCard = ({ product, userName }) => {
//     const [cartQty, setCartQty] = useState(0);
//     const [noOfProducts, setNoOfProducts] = useState();

//     useEffect(() => {
//         axios
//             .get(`${base_URL}/cart/${product.productId}`)
//             .then((response) => {
//                 if (response.data) {
//                     setCartQty(response.data.quantity);
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     }, [product.productId]);

//     const addToCart = () => {
//         axios
//             .get(`${base_URL}/cart/${product.productId}`)
//             .then((response) => {
//                 console.log(response);
//                 if (response.data) {
//                     const updatedProduct = {
//                         ...response.data,
//                         quantity: response.data.quantity + 1,
//                     };
//                     axios
//                         .put(`${base_URL}/cart/${product.productId}`, updatedProduct)
//                         .then((response) => {
//                             console.log('data:', response.data);
//                             setCartQty(response.data.quantity);
//                             toast.success('Product added to cart successfully!', {
//                                 position: toast.POSITION.BOTTOM_CENTER
//                             });
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 } else {
//                     const newProduct = {
//                         productId: product.productId,
//                         productName: product.productName,
//                         quantity: 1,
//                         price: product.price,
//                     };
//                     axios
//                         .post(`${base_URL}/cart`, newProduct)
//                         .then((response) => {
//                             console.log('data:', response.data);
//                             setCartQty(response.data.quantity);
//                             toast.success('Product added to cart successfully!', {
//                                 position: toast.POSITION.BOTTOM_CENTER
//                             });
//                         })
//                         .catch((error) => {
//                             console.log('Error:', error);
//                         });
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     const removeFromCart = () => {
//         axios
//             .delete(`${base_URL}/cart/${product.productId}`)
//             .then(() => {
//                 setCartQty(0);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     return (
//         <div className="col-sm-4" style={{ height: '350px' }}>
//             <Card style={{ textAlign: 'left' }}>
//                 <CardImg top src={product.image} alt="Product" style={{ height: '240px', maxWidth: '180px' }} />
//                 <CardBody>
//                     <CardTitle>{product.productName}</CardTitle>
//                     <CardText style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>
//                         Rs {product.price}
//                         <Button color="success" onClick={cartQty === 0 ? addToCart : removeFromCart}>
//                             {cartQty === 0 ? 'Add to Cart' : 'Remove from Cart'}
//                         </Button>
//                     </CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// const AllProductList = ({ userName }) => {
//     const [products, setProducts] = useState([]);
//     const { category } = useParams();

//     useEffect(() => {
//         getAllProducts();
//     }, [category]);

//     const getAllProducts = () => {
//         axios
//             .get(`${base_URL}/products`)
//             .then((response) => {
//                 console.log(category);

//                 if (category) {
//                     if (category === 'All') {
//                         console.log("category true", response.data)
//                         setProducts(response.data);
//                     } else if (response.data && category !== 'Style-Hub') {
//                         const filteredProducts = response.data.filter((product) => {
//                             return product.category === 'Clothing' || product.category === 'Footwear' || product.category === 'Watches';
//                         });

//                         setProducts(filteredProducts);
//                     } else {
//                         const filteredProducts = response.data.filter((product) => product.category === category);
//                         setProducts(filteredProducts);
//                     }
//                 } else {
//                     console.log("category false", response.data);
//                     setProducts(response.data);
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     };

//     return (
//         <div className="row text-center px-5" style={{ display: 'flex', justifyContent: 'center' }}>
//             <div className="row text-center px-3" style={{ width: '90%' }}>
//                 <CardHeader className="py-3" tag="h3" style={{ textAlign: 'left' }}>
//                     {category || "All"}
//                 </CardHeader>
//                 {products.map((product) =>
//                     <ProductCard key={product.productId} product={product} userName={userName} />
//                 )}
//             </div>
//         </div>
//     );
// };

// const ProductListWithToastify = ({ userName }) => {
//     const [noOfProducts, setNoOfProducts] = useState(0);

//     useEffect(() => {
//         axios
//             .get(`${base_URL}/cart`)
//             .then((response) => {
//                 console.log('...................:', response.data.length);
//                 setNoOfProducts(response.data.length);
//             })
//             .catch((error) => {
//                 console.log('Error:', error);
//             });
//     }, []);

//     return (
//         <div>
//             <ToastContainer />
//             <h1>Product List</h1>
//             <p>No. of Products in Cart: {noOfProducts}</p>
//             <AllProductList userName={userName} />
//         </div>
//     );
// };

// export default ProductListWithToastify;



import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardHeader } from 'reactstrap';
import base_URL from '../api/BootAPI';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product, userName, setNoOfProducts }) => {
    const [cartQty, setCartQty] = useState(0);

    useEffect(() => {
        axios
            .get(`${base_URL}/cart/${product.productId}`)
            .then((response) => {
                if (response.data) {
                    setCartQty(response.data.quantity);
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }, [product.productId]);

    const addToCart = () => {
        axios
            .get(`${base_URL}/cart/${product.productId}`)
            .then((response) => {
                console.log(response);
                if (response.data) {
                    const updatedProduct = {
                        ...response.data,
                        quantity: response.data.quantity + 1,
                    };
                    axios
                        .put(`${base_URL}/cart/${product.productId}`, updatedProduct)
                        .then((response) => {
                            console.log('data:', response.data);
                            setCartQty(response.data.quantity);

                            axios
                                .get(`${base_URL}/cart`)
                                .then((response) => {
                                    console.log('data:', response.data);
                                    setNoOfProducts(response.data.length);
                                })
                                .catch((error) => {
                                    console.log('Error:', error);
                                });

                         
                        })
                        .catch((error) => {
                            console.log('Error:', error);
                        });
                } else {
                    const newProduct = {
                        productId: product.productId,
                        productName: product.productName,
                        quantity: 1,
                        price: product.price,
                        image   : product.image
                    };
                    axios
                        .post(`${base_URL}/cart`, newProduct)
                        .then((response) => {
                            console.log('data:', response.data);
                            setCartQty(response.data.quantity);

                            axios
                                .get(`${base_URL}/cart`)
                                .then((response) => {
                                    console.log('data:', response.data);
                                    setNoOfProducts(response.data.length);
                                })
                                .catch((error) => {
                                    console.log('Error:', error);
                                });
                            toast.success('Added to Cart!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
                        })
                        .catch((error) => {
                            console.log('Error:', error);
                            toast.error('Somthing wrong', { autoClose: 2000 });
                        });
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    const removeFromCart = () => {
        axios
            .delete(`${base_URL}/cart/${product.productId}`)
            .then(() => {
                toast.success('removed!', { autoClose: 2000 });
                setCartQty(0);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };


    

    return (
        <div className="col-sm-4 my-2" style={{  width: 'calc(25% )',  }}>
            <Card style={{ textAlign: 'center', minHeight: '360px', }}>
                {/* <CardImg top src={product.image} alt="Product" style={{ height: '240px', width: '100%', objectFit: 'cover' }} /> */}

                <CardImg top src={product.image} alt="Product" style={{ height: '240px', width: '100%', objectFit: 'contain', objectPosition: 'center' }} />

                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle style={{ textAlign: 'left', fontWeight: 600 }}>{product.productName}</CardTitle>
                    <p style={{minHeight:'48px'}} className="text-muted px-2">{product.description}</p>
                    <CardText style={{ fontWeight: 600, display: 'flex', alignItems:'center', justifyContent: 'space-between', paddingRight: '20px' }}>
                        ${product.price}
                        <Button color="success" onClick={cartQty === 0 ? addToCart : removeFromCart}>
                            {cartQty === 0 ? 'Add to Cart' : 'Remove'}
                        </Button>
                    </CardText>
                </CardBody>
            </Card>
        </div>

    );
};

const AllProductList = ({ userName }) => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const [noOfProducts, setNoOfProducts] = useState(0);

    useEffect(() => {
        getAllProducts();
        getNoOfProductsInCart();
    }, [category]);

 
    const getAllProducts = () => {
        axios
            .get(`${base_URL}/products`)
            .then((response) => {
                console.log(category);

                if (category) {
                    if (category === 'All') {
                        console.log('category true', response.data);
                        setProducts(response.data);
                    } else if (response.data && category === 'Style-Hub') {
                        const filteredProducts = response.data.filter((product) => {
                            return product.category === 'Clothing' || product.category === 'Footwear' || product.category === 'Watches';
                        });

                        setProducts(filteredProducts);
                    } else {
                        const filteredProducts = response.data.filter((product) => product.category === category);
                        setProducts(filteredProducts);
                    }
                } else {
                    console.log('category false', response.data);
                    setProducts(response.data);
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    const getNoOfProductsInCart = () => {
        axios
            .get(`${base_URL}/cart`)
            .then((response) => {
                console.log('data:', response.data);
                setNoOfProducts(response.data.length);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    return (
        <div>
            <ToastContainer />
            <div className="row text-center px-5" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="row text-center px-3" style={{ width: '90%' }}>
                    <CardHeader className="py-3" tag="h3" style={{ textAlign: 'left' }}>
                        {category || 'All'} 
                    </CardHeader>
                    <p>No. of Products in Cart: {noOfProducts}</p>
                    {products.map((product) => (
                        <ProductCard key={product.productId} product={product} userName={userName} setNoOfProducts={setNoOfProducts} />
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default AllProductList;
