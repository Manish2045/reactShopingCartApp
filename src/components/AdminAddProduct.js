
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Button, Card, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
// import base_URL from '../api/BootAPI';

// function AdminAddProduct() {
//     useEffect(() => {
//         document.title = 'Add Products';
//     }, []);

//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [unitPrice, setUnitPrice] = useState('');
//     const [rating, setRating] = useState('');
//     const [productSpecification, setproductSpecification] = useState('');
//     const [file, setFile] = useState(null);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         const productData = {
//             productName,
//             category: selectedOption,
//             review: {},
//             rating: {},
//             image: [],
//             price: unitPrice,
//             description: productDescription,
//             specification: {},
//         };

//         axios
//             .post(`${base_URL}/products`, productData)
//             .then((response) => {
//                 console.log('Update Response:', response.data);
//                 // Optionally, you can show a success message or perform additional actions after successful update

//                 axios.get(`${base_URL}/products`).then(
//                     (response) => {
//                         console.log('Update Response:', response.data);
//                         // Optionally, you can show a success message or perform additional actions after successful update
//                     },
//                     (error) => {
//                         console.log('Update Error:', error);
//                     }
//                 );
//             })
//             .catch((error) => {
//                 console.log('Update Error:', error);
//             });

//         setProductName('');
//         setSelectedOption('');
//         setProductDescription('');
//         setUnitPrice('');
//         setRating('');
//         setproductSpecification('')
//         setFile(null);
//     };

//     return (
//         <div style={{ textAlign: 'left' }}>
//             <Card className="p-4" style={{ width: '100%' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                     Add Product
//                 </CardTitle>
//                 <Form onSubmit={handleFormSubmit} action={true.toString()}>
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
//                                         <DropdownItem onClick={() => handleOptionSelect('Option 1')}>
//                                             Option 1
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Option 2')}>
//                                             Option 2
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Laptop')}>
//                                             Laptop
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Footwear')}>
//                                             Footwear
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Clothing')}>
//                                             Clothing
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Bags')}>
//                                             Bags
//                                         </DropdownItem>
//                                     </DropdownMenu>
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

//                     <Row>
//                         <Col md={6}>
//                             <FormGroup>
//                                 <Label>price</Label>
//                                 <Input
//                                     placeholder="Enter price per unit."
//                                     type="number"
//                                     value={unitPrice}
//                                     onChange={(e) => setUnitPrice(e.target.value)}
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={6}>
//                             <FormGroup>
//                                 <Label>Rating</Label>
//                                 <Input
//                                     placeholder="Enter Stock Quantity"
//                                     type="number"
//                                     value={rating}
//                                     onChange={(e) => setRating(e.target.value)}
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <FormGroup className="my-3">
//                             <Label>Product Description</Label>
//                             <Col sm={12}>
//                                 <Input
//                                     placeholder="Enter description"
//                                     type="textarea"
//                                     value={productSpecification}
//                                     onChange={(e) => setproductSpecification(e.target.value)}
//                                 />
//                             </Col>
//                         </FormGroup>
//                     </Row>
//                     <FormGroup row className="my-3">
//                         <Label for="exampleFile" sm={2}>
//                             File
//                         </Label>
//                         <Col sm={12}>
//                             <Input
//                                 id="exampleFile"
//                                 name="file"
//                                 type="file"
//                                 onChange={(e) => setFile(e.target.files[0])}
//                             />
//                             <FormText>Select a photo for your product</FormText>
//                         </Col>
//                     </FormGroup>
                    

//                     <Button type="submit">Submit</Button>
//                 </Form>
//             </Card>
//         </div>
//     );
// }

// export default AdminAddProduct;






// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Button, Card, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-bootstrap';
// import 'react-toastify/dist/ReactToastify.css';

// function AdminAddProduct() {
//     useEffect(() => {
//         document.title = 'Add Products';
//     }, []);

//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [unitPrice, setUnitPrice] = useState('');
//     const [rating, setRating] = useState('');
//     const [productSpecification, setproductSpecification] = useState('');
//     const [image, setImage] =useState([]);
//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         const productData = {
//             productName,
//             category: selectedOption,
//             review: {},
//             rating: {},
//             image: [image],
//             price: unitPrice,
//             description: productDescription,
//             specification: {},
//         };

//         axios
//             .post(`${base_URL}/products`, productData)
//             .then((response) => {
//                 console.log('Update Response:', response.data);
          
//                 axios.get(`${base_URL}/products`).then(
//                     (response) => {
//                         console.log('Update Response:', response.data);

//                         toast.success('Product added to cart successfully!', {
//                             position: toast.POSITION.BOTTOM_CENTER
//                         });
//                     },
//                     (error) => {
//                         toast.error('An error occurred!', {
//                             position: toast.POSITION.TOP_RIGHT
//                         });
//                         console.log('Update Error:', error);
//                     }
//                 );
//             })
//             .catch((error) => {
//                 toast.error('Product added to cart successfully!', {
//                     position: toast.POSITION.BOTTOM_CENTER
//                 });
//                 console.log('Update Error:', error);
//             });

//         setProductName('');
//         setSelectedOption('');
//         setProductDescription('');
//         setUnitPrice('');
//         setRating('');
//         setproductSpecification('');
//         setImage('');
//     };

//     // Check if all the required fields are filled
//     const isFormComplete =
//         productName.trim() !== '' &&
//         selectedOption.trim() !== '' &&
//         productDescription.trim() !== '' &&
//         unitPrice.trim() !== '' &&
//         rating.trim() !== '' &&
//         productSpecification.trim() !== '' &&
//         image.trim() !== '' ;

//     return (
//         <div style={{ textAlign: 'left' }}>
//             <ToastContainer />
//             <Card className="p-4" style={{ width: '100%' }}>
//                 <CardTitle className="mb-4" tag="h4">
//                     Add Product
//                 </CardTitle>
//                 <Form onSubmit={handleFormSubmit} action={true.toString()}>
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
//                                         <DropdownItem onClick={() => handleOptionSelect('Watches')}>
//                                             Watches
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Mobiles')}>
//                                             Mobiles
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Laptop')}>
//                                             Laptop
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Footwear')}>
//                                             Footwear
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Clothing')}>
//                                             Clothing
//                                         </DropdownItem>
//                                         <DropdownItem onClick={() => handleOptionSelect('Bags')}>
//                                             Bags
//                                         </DropdownItem>
//                                     </DropdownMenu>
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

//                     <Row>
//                         <Col md={6}>
//                             <FormGroup>
//                                 <Label>price</Label>
//                                 <Input
//                                     placeholder="Enter price per unit."
//                                     type="number"
//                                     value={unitPrice}
//                                     onChange={(e) => setUnitPrice(e.target.value)}
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <Col md={6}>
//                             <FormGroup>
//                                 <Label>Rating</Label>
//                                 <Input
//                                     placeholder="Enter Stock Quantity"
//                                     type="number"
//                                     value={rating}
//                                     onChange={(e) => setRating(e.target.value)}
//                                 />
//                             </FormGroup>
//                         </Col>
//                         <FormGroup className="my-3">
//                             <Label>Product Description</Label>
//                             <Col sm={12}>
//                                 <Input
//                                     placeholder="Enter description"
//                                     type="textarea"
//                                     value={productSpecification}
//                                     onChange={(e) => setproductSpecification(e.target.value)}
//                                 />
//                             </Col>
//                         </FormGroup>
//                     </Row>
//                     <FormGroup>
//                         <Label>Product Image</Label>
//                         <Input name="file" type="text" placeholder="Paste link" onChange={(e) => setImage(e.target.value)} />
//                         <FormText>Paste photo link for your product</FormText>
//                  </FormGroup>
//                     <div style={{ textAlign: 'right' }}>
//                         <Button color="info" type="submit" disabled={!isFormComplete}>
//                             Submit
//                         </Button>
//                     </div>
//                 </Form>
//             </Card>
//         </div>
//     );
// }

// export default AdminAddProduct;








import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
import base_URL from '../api/BootAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminAddProduct() {
    useEffect(() => {
        document.title = 'Add Products';
    }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [rating, setRating] = useState('');
    const [productSpecification, setproductSpecification] = useState('');
    const [image, setImage] = useState();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const productData = {
            productName,
            category: selectedOption,
            review: {},
            rating: {},
            image: [image],
            price: unitPrice,
            description: productDescription,
            specification: {},
        };

        axios
            .post(`${base_URL}/products`, productData)
            .then((response) => {
                console.log('Update Response:', response.data);
              

                axios.get(`${base_URL}/products`).then(
                    (response) => {
                        console.log('Update Response:', response.data);


                        toast.success('Product added!', { autoClose: 2000 });

                      
                      
                    },
                    (error) => {
                        toast.error('An error occurred!', {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        console.log('Update Error:', error);
                    }
                );
            })
            .catch((error) => {
                toast.error('An error occurred!', {
                    position: toast.POSITION.TOP_RIGHT
                });
                console.log('Update Error:', error);
            });

        setProductName('');
        setSelectedOption('');
        setProductDescription('');
        setUnitPrice('');
        setRating('');
        setproductSpecification('');
        setImage();
    };

    const isFormComplete =
        productName.trim() !== '' &&
        selectedOption.trim() !== '' &&
        productDescription.trim() !== '' &&
        unitPrice.trim() !== '' &&
        rating.trim() !== '' &&
        productSpecification.trim() !== '' &&
        image.length !== 0;

    return (
        <div style={{ textAlign: 'left' }}>
            <ToastContainer />
            <Card className="p-4" style={{ width: '100%' }}>
                <CardTitle className="mb-4" tag="h4">
                    Add Product
                </CardTitle>
                <Form onSubmit={handleFormSubmit} action={true.toString()}>
                    <Row>
                        <Col md={9}>
                            <FormGroup>
                                <Label>Product Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter product name"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                />
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
                                        <DropdownItem onClick={() => handleOptionSelect('Watches')}>
                                            Watches
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Mobiles')}>
                                            Mobiles
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Laptop')}>
                                            Laptop
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Footwear')}>
                                            Footwear
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Clothing')}>
                                            Clothing
                                        </DropdownItem>
                                        <DropdownItem onClick={() => handleOptionSelect('Bags')}>
                                            Bags
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="my-3">
                        <Label>Product Description</Label>
                        <Col sm={12}>
                            <Input
                                placeholder="Enter description"
                                type="textarea"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                            />
                        </Col>
                    </FormGroup>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input
                                    placeholder="Enter price per unit."
                                    type="number"
                                    value={unitPrice}
                                    onChange={(e) => setUnitPrice(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Rating</Label>
                                <Input
                                    placeholder="Enter Stock Quantity"
                                    type="number"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <FormGroup className="my-3">
                            <Label>Product Specification</Label>
                            <Col sm={12}>
                                <Input
                                    placeholder="Enter specification"
                                    type="textarea"
                                    value={productSpecification}
                                    onChange={(e) => setproductSpecification(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                    </Row>
                    <FormGroup>
                        <Label>Product Image</Label>
                        <Input name="file" type="text" placeholder="Paste link" onChange={(e) => setImage(e.target.value)} />
                        <FormText>Paste photo link for your product</FormText>
                    </FormGroup>
                    <div style={{ textAlign: 'right' }}>
                        <Button color="info" type="submit" disabled={!isFormComplete}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

export default AdminAddProduct;
