


import React, { useState, useEffect } from 'react';
import { Card, FormGroup, Button, Row, Col, Label, Input, CardTitle, CardBody, CardFooter } from 'reactstrap';
import base_URL from '../api/BootAPI';
import axios from 'axios';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function AddressCard({ userProfile = {}, address = {}, handleEdit, selected, handleSelect, closeAddAddress, selectAddressHandle }) {
    const { flatNumber, colonyName, state, city, pincode } = address;


    

    const handleCheckboxClick = () => {
        console.log(address);
        closeAddAddress();
        selectAddressHandle(address)
        // Call the handleSelectAddress callback function with the selected address
        // handleSelectAddress(address);
    };


    console.log(address);
    return (
        <Card style={{ textAlign: 'left' }}>
            <CardBody>
                <CardTitle>
                    <h5>{userProfile.fullName}</h5>
                </CardTitle>
                <p>{userProfile.mobileNumber}</p>
                <p>
                    {flatNumber}, {colonyName}, {state}, {city} - {pincode}
                </p>
            </CardBody>
            <CardFooter style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button color="dark" onClick={handleEdit}>
                    Edit
                </Button>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" checked={selected} onClick={handleCheckboxClick} /> Select
                    </Label>
                </FormGroup>
            </CardFooter>
        </Card>
    );
}




function EditAddressInput({ address, userProfile, handleSave }) {
    const [modifiedAddress, setModifiedAddress] = useState({ ...address });
    const [modifiedUserProfile, setModifiedUserProfile] = useState({ ...userProfile });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setModifiedAddress((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    console.log(address)
    return (
        <div className="p-3" style={{ textAlign: "left" }}>
            <CardTitle>
                <h4>Modify Address</h4>
            </CardTitle>
            <FormGroup>
                <Label for="name">Name</Label>
                <input
                    id='name'
                    name='fullName'
                    value={userProfile.fullName || ''}
                    style={{
                        outline: 'none',
                        border: 'none',
                        fontWeight: 555,
                        borderRadius: 0,
                        backgroundColor: 'transparent',
                        width: '100%',
                        padding: '0px 10px'
                    }}
                    readOnly
                />
            </FormGroup>
            <FormGroup>
                <Label for="mobileNumber">Mobile Number</Label>
                <input
                    id="mobileNumber"
                    name="mobileNumber"
                    value={modifiedUserProfile.mobileNumber}
                    onChange={handleChange}
                    style={{
                        outline: 'none',
                        border: 'none',
                        fontWeight: 555,
                        borderRadius: 0,
                        backgroundColor: 'transparent',
                        width: '100%',
                        padding: '0px 10px'
                    }}
                    readOnly

                />
            </FormGroup>
            <FormGroup>
                <Label for="pincode">Pin Code</Label>
                <input
                    id="pincode"
                    name="pincode"
                    value={modifiedAddress.pincode}
                    onChange={handleChange}
                    style={{
                        outline: 'none',
                        border: 'none',
                        borderBottom: '2px solid black',
                        borderRadius: 0,
                        backgroundColor: 'transparent',
                        width: '100%',
                    }}
                />
            </FormGroup>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <input
                            id="city"
                            name="city"
                            value={modifiedAddress.city}
                            onChange={handleChange}
                            style={{
                                outline: 'none',
                                border: 'none',
                                borderBottom: '2px solid black',
                                borderRadius: 0,
                                backgroundColor: 'transparent',
                                width: '100%',
                            }}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="state">State</Label>
                        <input
                            id="state"
                            name="state"
                            value={modifiedAddress.state}
                            onChange={handleChange}
                            style={{
                                outline: 'none',
                                border: 'none',
                                borderBottom: '2px solid black',
                                borderRadius: 0,
                                backgroundColor: 'transparent',
                                width: '100%',
                            }}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="colonyName">Colony</Label>
                <input
                    id="colonyName"
                    name="colonyName"
                    value={modifiedAddress.colonyName}
                    onChange={handleChange}
                    style={{
                        outline: 'none',
                        border: 'none',
                        borderBottom: '2px solid black',
                        borderRadius: 0,
                        backgroundColor: 'transparent',
                        width: '100%',
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="streetName">Street</Label>
                <input
                    id="streetName"
                    name="streetName"
                    value={modifiedAddress.flat}
                    onChange={handleChange}
                    style={{
                        outline: 'none',
                        border: 'none',
                        borderBottom: '2px solid black',
                        borderRadius: 0,
                        backgroundColor: 'transparent',
                        width: '100%',
                    }}
                />
            </FormGroup>
            <div style={{ width: "100%", textAlign: "right" }}>
                <Button
                    color="dark"
                    onClick={() => handleSave(modifiedAddress, modifiedUserProfile)}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}







function AddAddressInput({ handleSave }) {
    const [userProfile, setUserProfile] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserProfile((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const saveAddress = () => {
        handleSave(userProfile);
        setUserProfile({});
    };

    return (
        <div className='p-3' style={{ textAlign: 'left', position: 'relative' }}>
            <CardTitle>
                <h4>Add Address</h4>
            </CardTitle>
            <FormGroup>
                <Label for='streetName'>House no /Street</Label>
                <Input id='streetName' name='streetName' value={userProfile.streetName || ''} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for='pincode'>Pin Code</Label>
                <Input id='pincode' name='pincode' value={userProfile.pincode || ''} onChange={handleChange} />
            </FormGroup>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input id='city' name='city' value={userProfile.city || ''} onChange={handleChange} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for='state'>State</Label>
                        <Input id='state' name='state' value={userProfile.state || ''} onChange={handleChange} />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for='colonyName'>Colony</Label>
                <Input id='colonyName' name='colonyName' value={userProfile.colonyName || ''} onChange={handleChange} />
            </FormGroup>
           
           
            <div style={{ width: '100%', textAlign: 'right' }}>
                <Button color='dark' onClick={saveAddress}>
                    Save
                </Button>
            </div>
        </div>
    );
}



function AddAddress({ onClose, selectAddressHandle }) {
    const [userProfile, setUserProfile] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);



    useEffect(() => {

        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("USER"));
            
            const response = await axios.get(`${base_URL}/profiles/${user.profileId}`);
            console.log(',.,.,.,.', response.data )
            setUserProfile(response.data);
            setAddresses(response.data.addresses);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const handleEdit = (address) => {
        setSelectedAddress(address);
        setEditMode(true);
    };

    const handleSave = async (modifiedAddress, modifiedUserProfile) => {
        try {
            const updatedUserProfile = { ...userProfile };
            const updatedAddresses = updatedUserProfile.addresses.map((address) => {
                if (address.addressId === modifiedAddress.addressId) {
                    return { ...modifiedAddress };
                }
                return address;
            });
            updatedUserProfile.addresses = updatedAddresses;
            const user = JSON.parse(localStorage.getItem("USER"));
            await axios.put(`${base_URL}/profiles/${user.profileId}`, updatedUserProfile);

            fetchUserProfile();

            setEditMode(false);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const addAddress = async (newAddress) => {
        try {
            const updatedUserProfile = { ...userProfile };
            updatedUserProfile.addresses.push(newAddress);
            const user = JSON.parse(localStorage.getItem("USER"));
            await axios.put(`${base_URL}/profiles/${user.profileId}`, updatedUserProfile);

            console.log('addedd...........', updatedUserProfile);

            fetchUserProfile();

            setEditMode(false);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const closeAddAddress = () => {
        setSelectedAddress(null);
        setEditMode(false);
        onClose();
    };

    return (
        <div className='p-4' style={{ width: '100%', height: '100%' }}>
            <div
                className='close-divs'
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#23222250',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1100,
                }}
                onClick={closeAddAddress}
            ></div>
            <div
                className='scroller-x'
                style={{
                    width: '450px',
                    height: '100vh',
                    backgroundColor: 'white',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 1101,
                    overflowY: 'scroll',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 20px',
                        width: '100%',
                        backgroundColor: 'white',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CardTitle style={{ marginRight: '10px' }}>
                            <h3>DELIVERY ADDRESS</h3>
                        </CardTitle>
                    </div>
                    <div>
                        <h3 onClick={closeAddAddress}>
                            <FontAwesomeIcon icon={faTimes} />
                        </h3>
                    </div>
                </div>
                
                {!editMode && (
                    <div>
                        <CardFooter style={{ width: '100%' }}>
                            <Button color='dark' style={{ width: '100%', padding: '12px 0',fontSize:'17px',fontWeight:500 }} onClick={() => setEditMode(true)}>
                                Add Address
                            </Button>
                        </CardFooter>
                    </div>
                )}
                <CardBody>
                    {addresses.map((address, index) => (
                        <div key={index}>
                            {!editMode && (
                                <AddressCard
                                    userProfile={userProfile}
                                    address={address}
                                    handleEdit={() => handleEdit(address)}
                                    selectAddressHandle={selectAddressHandle}
                                    closeAddAddress={closeAddAddress} // Pass the closeAddAddress function as a prop
                                />
                            )}
                            {editMode && selectedAddress === address && <EditAddressInput address={address} userProfile={userProfile} handleSave={handleSave} />}
                        </div>
                    ))}
                    {editMode && selectedAddress === null && <AddAddressInput handleSave={addAddress} />}
                </CardBody>
            </div>
        </div>
    );
}
export default AddAddress;
