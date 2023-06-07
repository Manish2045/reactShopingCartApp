

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, Form, FormGroup, Label, Input, Col, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormText, CardTitle } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';

// function AdminUpdateProduct() {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [unitPrice, setUnitPrice] = useState('');
//     const [file, setFile] = useState(null);
//     const [image, setImage] = useState();
//     const { productId } = useParams();



//     useEffect(() => {
//         // alert('Please select')
    
//         console.log(productId)
//         try {
//             axios
//                 .get(`${base_URL}/products/${productId}`)
//                 .then((response) => {
//                     const product= response.data
//                     console.log(product.image[0])
//                     setProductName(product.productName);
//                     setSelectedOption(product.category);
//                     setProductDescription(product.description);
//                     setUnitPrice(product.price);
//                     setImage(product.image[0]);
//                     console.log(image)
//                     // setProducts(response.data);
//                 })

//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     }, [])

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         // Create an object with the form data
//         const productData = {
//             productName:productName,
//             category: selectedOption,
//             description: productDescription,
//             price: unitPrice,
//             image:[image]
//         };

//         // Update the product details


//         console.log('Updating product details', productData)
//         // Call an API or perform the necessary logic to update the product using the productData object

//         // Reset the form fields
//         setProductName('');
//         setSelectedOption('');
//         setProductDescription('');
//         setUnitPrice('');
//         setFile(null);
//     };

//     return (
//         <div style={{ textAlign: 'left' }}>
//             <Card className="p-4" style={{ width: '100%' }}>

//                 <CardTitle className='mb-4' tag="h4">
//                     Update Product Details
//                 </CardTitle>
//                 <Form onSubmit={handleFormSubmit}>
//                     <Row>
//                         <Col md={9}>
//                             <FormGroup>
//                                 <Label>Product Name</Label>
//                                 <Input
//                                     type="text"
//                                     placeholder="Enter product name"
//                                     value={productName}
//                                     onChange={(e) => setProductName(e.target.value)}
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={3}>
//                             <Label>Product Type</Label>
//                             <FormGroup color="primary">
//                                 <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//                                     <DropdownToggle color="warning" caret>
//                                         {selectedOption || 'Select an option'}
//                                     </DropdownToggle>
//                                     <DropdownMenu style={{ width: '600px' }}>
                               
                                       
//                                             <DropdownItem onClick={() => handleOptionSelect('Watches')}>
//                                                 Watches
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Mobiles')}>
//                                                 Mobiles
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Laptop')}>
//                                                 Laptop
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Footwear')}>
//                                                 Footwear
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Clothing')}>
//                                                 Clothing
//                                             </DropdownItem>
//                                             <DropdownItem onClick={() => handleOptionSelect('Bags')}>
//                                                 Bags
//                                             </DropdownItem>
//                                         </DropdownMenu>
                                    
                               
//                                 </Dropdown>
//                             </FormGroup>
//                         </Col>
//                     </Row>
//                     <FormGroup className="my-3">
//                         <Label>Product Description</Label>
//                         <Col sm={12}>
//                             <Input
//                                 placeholder="Enter description"
//                                 type="textarea"
//                                 value={productDescription}
//                                 onChange={(e) => setProductDescription(e.target.value)}
//                             />
//                         </Col>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label>Unit Price</Label>
//                         <Input
//                             type="text"
//                             placeholder="Enter unit price"
//                             value={unitPrice}
//                             onChange={(e) => setUnitPrice(e.target.value)}
//                         />
//                     </FormGroup>
//                     <Row>
//                         <Col md={6}>
                            
//                         </Col>
//                         <Col md={6}>
                            
//                         </Col>
//                     </Row>
//                     <FormGroup>
//                         <Label>Product Image</Label>
//                         <Input name="file" type="text" placeholder="Paste link" value={image} onChange={(e) => setImage(e.target.value)} />
//                         <FormText>Paste photo link for your product</FormText>
//                     </FormGroup>
//                     <Button color='success' type="submit">Update</Button>
//                 </Form>
//             </Card>
//         </div>
//     );
// }

// export default AdminUpdateProduct;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Form, FormGroup, Label, Input, Col, Container, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormText, CardTitle, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import base_URL from '../api/BootAPI';
import axios from 'axios';

function AdminUpdateProduct() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [image, setImage] = useState('');
    const { productId } = useParams();

    useEffect(() => {
        console.log(productId);
        try {
            axios
                .get(`${base_URL}/products/${productId}`)
                .then((response) => {
                    const product = response.data;
                    setProductName(product.productName);
                    setSelectedOption(product.category);
                    setProductDescription(product.description);
                    setUnitPrice(product.price);
                    setImage(product.image[0]);
                });
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Create an object with the form data
        const productData = {
            productName: productName,
            category: selectedOption,
            description: productDescription,
            price: unitPrice,
            image: [image],
        };

        try {
            // Update the product details
            await axios.put(`${base_URL}/products/${productId}`, productData);
            toast.success('Product details updated!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
        } catch (error) {
            console.error('Error updating product:', error);
            toast.error('Failed to update product details!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
        }

        // Reset the form fields
        setProductName('');
        setSelectedOption('');
        setProductDescription('');
        setUnitPrice('');
        setImage('');
    };

    return (
        <div style={{ textAlign: 'left' }}>
            <Card className="p-4" style={{ width: '100%' }}>
                <CardTitle className="mb-4" tag="h4">
                    Update Product Details
                </CardTitle>
                <Form onSubmit={handleFormSubmit}>
                    <Container>
                        <Row>
                            <Col md={9}>
                                <FormGroup>
                                    <Label>Product Name</Label>
                                    <Input type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <Label>Product Type</Label>
                                <FormGroup color="primary">
                                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                        <DropdownToggle color="warning" caret>
                                            {selectedOption || 'Select an option'}
                                        </DropdownToggle>
                                        <DropdownMenu style={{ width: '600px' }}>
                                            <DropdownItem onClick={() => handleOptionSelect('Watches')}>Watches</DropdownItem>
                                            <DropdownItem onClick={() => handleOptionSelect('Mobiles')}>Mobiles</DropdownItem>
                                            <DropdownItem onClick={() => handleOptionSelect('Laptop')}>Laptop</DropdownItem>
                                            <DropdownItem onClick={() => handleOptionSelect('Footwear')}>Footwear</DropdownItem>
                                            <DropdownItem onClick={() => handleOptionSelect('Clothing')}>Clothing</DropdownItem>
                                            <DropdownItem onClick={() => handleOptionSelect('Bags')}>Bags</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup className="my-3">
                            <Label>Product Description</Label>
                            <Col sm={12}>
                                <Input placeholder="Enter description" type="textarea" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label>Unit Price</Label>
                            <Input type="text" placeholder="Enter unit price" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Product Image</Label>
                            <Input name="file" type="text" placeholder="Paste link" value={image} onChange={(e) => setImage(e.target.value)} />
                            <FormText>Paste photo link for your product</FormText>
                        </FormGroup>
                        <Button color="success" type="submit">
                            Update
                        </Button>
                    </Container>
                </Form>
            </Card>
            <ToastContainer /> {/* Add ToastContainer to display toast notifications */}
        </div>
    );
}

export default AdminUpdateProduct;
