


// import React, { useEffect } from 'react';
// import { Card, Table } from 'reactstrap';

// function AdminAllProduct() {



//     useEffect(() => {
//         // alert('Please select')
//         document.title = 'All Products'
//     }, [])


//     const products = [
//         {
//             productId: 12312,
//             name: 'AYUSH',
//             type: 'BABA',
//             price: "3453",
//             soldQty: "FDGHJGH",
//             stockQty: "DFGDFGDF",
//         },
//         {
//             productId: 12312,
//             name: 'AYUSH',
//             type: 'BABA',
//             price: "3453",
//             soldQty: "FDGHJGH",
//             stockQty: "DFGDFGDF",
//         },
//         {
//             productId: 12312,
//             name: 'AYUSH',
//             type: 'BABA',
//             price: "3453",
//             soldQty: "FDGHJGH",
//             stockQty: "DFGDFGDF",
//         },
//         {
//             productId: 12312,
//             name: 'AYUSH',
//             type: 'BABA',
//             price: "3453",
//             soldQty: "FDGHJGH",
//             stockQty: "DFGDFGDF",
//         }
//     ];

//     return (
//         <div>
//             <div className="text-center" style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>
//                 Stock Products
//             </div>
//             <div className="container-fluid">
//                 <div className="table-responsive">
//                     <Table hover size="sm">
//                         <thead style={{ backgroundColor: '#2c6c4b', color: 'white', fontSize: '18px' }}>
//                             <tr>
//                                 <th>Image</th>
//                                 <th>ProductId</th>
//                                 <th>Name</th>
//                                 <th>Type</th>
//                                 <th>Price</th>
//                                 <th>Sold Qty</th>
//                                 <th>Stock Qty</th>
//                                 <th colSpan="2" style={{ textAlign: 'center' }}>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody style={{ backgroundColor: 'white', fontSize: '16px' }}>
//                             {products.length > 0 ? (
//                                 products.map((product) => (
//                                     <tr key={product.productId}>
//                                         <td>
//                                             <img src={`./ShowImage?pid=${product.productId}`} style={{ width: '50px', height: '50px' }} alt="Product" />
//                                         </td>
//                                         <td>
//                                             <a href={`./updateProduct.jsp?prodid=${product.productId}`}>{product.productId}</a>
//                                         </td>
//                                         <td>{product.name.substring(0, Math.min(product.name.length, 25)) + '..'}</td>
//                                         <td>{product.type.toUpperCase()}</td>
//                                         <td>{product.price}</td>
//                                         <td>{product.soldQty}</td>
//                                         <td>{product.stockQty}</td>
//                                         <td>
//                                             <form method="get" action={`updateproduct?prodid=${product.productId}`}>
//                                                 <button type="submit" className="btn btn-primary">Update</button>
//                                             </form>
//                                         </td>
//                                         <td>
//                                             <form method="post" action={`./RemoveProductSrv?prodid=${product.productId}`}>
//                                                 <button type="submit" className="btn btn-danger">Remove</button>
//                                             </form>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr style={{ backgroundColor: 'grey', color: 'white' }}>
//                                     <td colSpan="7" style={{ textAlign: 'center' }}>No Items Available</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </Table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AdminAllProduct;





// import React, { useEffect, useState } from 'react';
// import { Card, Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';

// function AdminAllProduct() {
//     const [products, setProducts] = useState([]);
//     const [filteredCategory, setFilteredCategory] = useState('All');
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     useEffect(() => {
//         document.title = 'All Products';
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => {
//         try {




//             axios
//                 .get(`${base_URL}/products`)
//                 .then((response) => {

//                     console.log(response.data)

//                     setProducts(response.data);
//                 })
//                 .catch((error) => {
//                     console.log('Error:', error);
//                 });


//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     const filterProducts = (category) => {
//         setFilteredCategory(category);
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const filteredProducts = filteredCategory === 'All' ? products : products.filter(product => product.category === filteredCategory);

//     return (
//         <div>
//             <div className="text-center" style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>
//                 Stock Products
//             </div>
//             <div className="container-fluid">
//                 <div className="table-responsive">
//                     <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{ float: 'right', marginBottom: '10px' }}>
//                         <DropdownToggle caret>
//                             Filter Category: {filteredCategory}
//                         </DropdownToggle>
//                         <DropdownMenu>
//                             <DropdownItem onClick={() => filterProducts('All')}>All</DropdownItem>
//                             <DropdownItem onClick={() => filterProducts('Watches')}>Watches</DropdownItem>
//                             <DropdownItem onClick={() => filterProducts('Clothes')}>Clothes</DropdownItem>
//                             <DropdownItem onClick={() => filterProducts('Mobile')}>Mobile</DropdownItem>
//                             <DropdownItem onClick={() => filterProducts('Laptop')}>Laptop</DropdownItem>
//                             <DropdownItem onClick={() => filterProducts('Footwear')}>Footwear</DropdownItem>
//                         </DropdownMenu>
//                     </Dropdown>
//                     <Table hover size="sm">
//                         <thead style={{ backgroundColor: '#2c6c4b', color: 'white', fontSize: '18px' }}>
//                             <tr>
//                                 <th>Image</th>
//                                 <th>ProductId</th>
//                                 <th>Name</th>
//                                 <th>Type</th>
//                                 <th>Price</th>
//                                 <th>Sold Qty</th>
//                                 <th>Stock Qty</th>
//                                 <th colSpan="2" style={{ textAlign: 'center' }}>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody style={{ backgroundColor: 'white', fontSize: '16px' }}>
//                             {filteredProducts.length > 0 ? (
//                                 filteredProducts.map((product) => (
//                                     <tr key={product.productId}>
//                                         <td>
//                                             <img src={`./ShowImage?pid=${product.productId}`} style={{ width: '50px', height: '50px' }} alt="Product" />
//                                         </td>
//                                         <td>
//                                             <a href={`./updateProduct.jsp?prodid=${product.productId}`}>{product.productId}</a>
//                                         </td>
//                                         <td>{product.name.substring(0, Math.min(product.name.length, 25)) + '..'}</td>
//                                         <td>{product.type.toUpperCase()}</td>
//                                         <td>{product.price}</td>
//                                         <td>{product.soldQty}</td>
//                                         <td>{product.stockQty}</td>
//                                         <td>
//                                             <form method="get" action={`updateproduct?prodid=${product.productId}`}>
//                                                 <button type="submit" className="btn btn-primary">Update</button>
//                                             </form>
//                                         </td>
//                                         <td>
//                                             <form method="post" action={`./RemoveProductSrv?prodid=${product.productId}`}>
//                                                 <button type="submit" className="btn btn-danger">Remove</button>
//                                             </form>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr style={{ backgroundColor: 'grey', color: 'white' }}>
//                                     <td colSpan="7" style={{ textAlign: 'center' }}>No Items Available</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </Table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AdminAllProduct;



import React, { useEffect, useState } from 'react';
import { Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Card, CardTitle, CardBody } from 'reactstrap';
import axios from 'axios';
import base_URL from '../api/BootAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

function AdminAllProduct() {
    const [products, setProducts] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState('All');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'All Products';
        fetchProducts();
    }, []);

    const handleRemoveProduct = async (productId) => {
        try {
            await axios.delete(`${base_URL}/products/${productId}`);
            toast.success('Removed!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
            fetchProducts(); // Fetch updated list of products after removal
        } catch (error) {
            console.error('Error removing product:', error);
        }
    }

    const handleUpdateProduct = async (productId) => {
        navigate(`/admin/updateproduct/${productId}`);
    }
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${base_URL}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const filterProducts = (category) => {
        setFilteredCategory(category);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const filteredProducts = filteredCategory === 'All' ? products : products.filter((product) => product.category === filteredCategory);

    return (

        <Card className="" style={{ width: '100%', height:'90vh', textAlign: 'left' }}>
            <CardTitle className=" m-4" tag="h4">
                In Stock Products
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{ float: 'right', marginBottom: '10px' }}>
                    <DropdownToggle caret color='warning'>
                        {filteredCategory}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => filterProducts('All')}>All</DropdownItem>
                        <DropdownItem onClick={() => filterProducts('Watches')}>Watches</DropdownItem>
                        <DropdownItem onClick={() => filterProducts('Clothes')}>Clothes</DropdownItem>
                        <DropdownItem onClick={() => filterProducts('Mobile')}>Mobile</DropdownItem>
                        <DropdownItem onClick={() => filterProducts('Laptop')}>Laptop</DropdownItem>
                        <DropdownItem onClick={() => filterProducts('Footwear')}>Footwear</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </CardTitle>

                    <CardBody className='p-0'>
                       
                        <Table hover size="sm">
                            <thead style={{ backgroundColor: '#2c6c4b', color: 'white', fontSize: '18px' }}>
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Name</th>
                                    <th>Price $</th>
                                    <th colSpan="2" style={{ textAlign: 'center' }}></th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: 'white', fontSize: '16px' }}>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                        <tr key={product.productId}>
                                            <td>
                                                <Button onClick={() => handleUpdateProduct(product.productId)} color="link">

                                                    #{product.productId}
                                                </Button>


                                            </td>
                                            <td>
                                                {product.image && product.image.length > 0 ? (
                                                    <img src={product.image[0]} style={{ width: '50px', height: '50px' }} alt="Product" />
                                                ) : (
                                                    'No Image'
                                                )}
                                            </td>
                                            <td>{product.category ? product.category.toUpperCase() : ''}</td>
                                            <td>{product.productName.substring(0, Math.min(product.productName.length, 25)) + '..'}</td>
                                            <td>{product.price}</td>
                                            <td>

                                                <button onClick={() => handleUpdateProduct(product.productId)} type="submit" className="btn btn-primary">
                                                    Update
                                                </button>

                                            </td>
                                            <td>
                                                <button onClick={() => handleRemoveProduct(product.productId)} type="button" className="btn btn-danger">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr style={{ backgroundColor: 'grey', color: 'white' }}>
                                        <td colSpan="7" style={{ textAlign: 'center' }}>
                                            No Items Available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                </Table>
            </CardBody>
                <ToastContainer /> 
        </Card>

    );
}

export default AdminAllProduct;
