// import React, { useState, useEffect } from 'react';
// import { Form, Card, Col, FormGroup, Row, Button, CardBody, CardTitle, Input, Label } from 'reactstrap';
// import base_URL from '../api/BootAPI';
// import axios from 'axios';
// function ProfileHome() {
//     const [isEditing, setIsEditing] = useState(false);



//     useEffect(() => {
//         // alert('Please select')
//         document.title = 'Profile'
//     }, [])


//     const getUserProfile = (user) => {
//         console.log(`${base_URL}/all`)
//         axios.get(`${base_URL}/user/1`).then(response => {
//             console.log('...................', response.data)
            
//             setUserDetails(response.data)
//         },
//             err => {
//                 console.log(err )
//             }
//         )
//     }
    





//     useEffect(() => {
//        const user = {
//             profileId: 4,
//             fullfullName: "aa",
//             email: "ayushguptsQW@gmail.com",
//             mobileNumber: 123445675,
//             password: "35436545643"
//         }
//         // setUserProfile(user)
//         getUserProfile()
        
//     }, [])

//     useEffect(() => {
//         // alert('Please select')
//         document.title = 'Profile'
//     }, [])



//     const [userDetails, setUserDetails] = useState({});

//     const handleEditClick = () => {
//         setIsEditing(true);
//     };

//     const handleSaveClick = () => {
//         setIsEditing(false);
//     };

//     const handleChange = (e) => {
//         const { fullName, value } = e.target;
//         setUserDetails((prevDetails) => ({
//             ...prevDetails,
//             [fullName]: value
//         }));
//         console.log(userDetails)
//     };

//     return (
//         <div>
//             <Card style={{ width: '100%', textAlign: 'left' }}>
//                 <CardBody>
//                     <CardTitle classfullName='mb-4' tag="h4">
//                         PERSONAL INFORMATION
//                     </CardTitle>

//                     <Form classfullName='per-info'>
//                         <FormGroup classfullName='my-1'>
//                             <Row>
//                                 <Label sm={2}>fullName</Label>
//                                 <Col sm={8}>
//                                     <Input
//                                         classfullName='p-1 px-2'
//                                         type="text"
//                                         fullName="fullName"
//                                         value={userDetails.fullName}
//                                         onChange={handleChange}
//                                         disabled={!isEditing}
//                                     />
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <FormGroup classfullName='my-1'>
//                             <Row>
//                                 <Label sm={2}>Email</Label>
//                                 <Col sm={8}>
//                                     <Input
//                                         classfullName='p-1 px-2'
//                                         type="email"
//                                         fullName="email"
//                                         value={userDetails.email}
//                                         onChange={handleChange}
//                                         disabled={!isEditing}
//                                     />
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <FormGroup classfullName='my-1'>
//                             <Row>
//                                 <Label sm={2}>mobileNumber</Label>
//                                 <Col sm={8}>
//                                     <Input
//                                         classfullName='p-1 px-2'
//                                         type="number"
//                                         fullName="mobileNumber"
//                                         value={userDetails.mobileNumber}
//                                         onChange={handleChange}
//                                         disabled={!isEditing}
//                                     />
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                         <FormGroup classfullName='my-1'>
//                             <Row>
//                                 <Label sm={2}>Address</Label>
//                                 <Col sm={8}>
//                                     <Input
//                                         classfullName='p-1 px-2'
//                                         type="text"
//                                         fullName="address"
//                                         value={userDetails.address}
//                                         onChange={handleChange}
//                                         disabled={!isEditing}
//                                     />
//                                 </Col>
//                             </Row>
//                         </FormGroup>
//                     </Form>

//                     {!isEditing && (
//                         <Button color='warning' onClick={handleEditClick}>Edit</Button>
//                     )}
//                     {isEditing && (
//                         <Button color='warning' onClick={handleSaveClick}>Save</Button>
//                     )}
//                 </CardBody>
//             </Card>
//         </div>
//     );
// }

// export default ProfileHome;


import React, { useState, useEffect } from 'react';
import { Form, Card, Col, FormGroup, Row, Button, CardBody, CardTitle, Input, Label } from 'reactstrap';
import base_URL from '../api/BootAPI';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfileHome() {
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        profileId: 0,
        fullName: '',
        email: '',
        mobileNumber: '',
        password: '',
        address: '',
    });

    useEffect(() => {



        const user = JSON.parse(localStorage.getItem("USER"));
        // const adminx = JSON.parse(localStorage.getItem('ADMIN'));
        if (user === null) {
            navigate('/login')
        } else {
            document.title = 'Profile';
            getUserProfile();
        }

        
    }, []);

    const getUserProfile = () => {
        const user = JSON.parse(localStorage.getItem("USER"));
        const userId = user.profileId;
        axios.get(`${base_URL}/user/${userId}`).then(
            (response) => {
                console.log('Response:', response.data);
                setUserDetails(response.data);
            },
            (error) => {
                console.log('Error:', error);
            }
        );
    };

    const updateUserProfile = () => {
   // Specify the ID of the user profile you want to update
        const user = JSON.parse(localStorage.getItem("USER"));
        console.log('User:', userDetails); 
        const userId = user.profileId;
        axios.put(`${base_URL}/user/${userId}`, userDetails).then(
            (response) => {
                console.log('Update Response:', response.data);
                // Optionally, you can show a success message or perform additional actions after successful update
            },
            (error) => {
                console.log('Update Error:', error);
            }
        );
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        updateUserProfile();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    return (
        <div>
            <Card style={{ width: '100%', textAlign: 'left' }}>
                <CardBody>
                    <CardTitle className="mb-4" tag="h4">
                        PERSONAL INFORMATION
                    </CardTitle>
                    <Form className="per-info">
                        <FormGroup className="my-1">
                            <Row>
                                <Label sm={2}>Full Name</Label>
                                <Col sm={8}>
                                    <Input
                                        className="p-1 px-2"
                                        type="text"
                                        name="fullName"
                                        value={userDetails.fullName || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="my-1">
                            <Row>
                                <Label sm={2}>Email</Label>
                                <Col sm={8}>
                                    <Input
                                        className="p-1 px-2"
                                        type="email"
                                        name="email"
                                        value={userDetails.email || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="my-1">
                            <Row>
                                <Label sm={2}>DOB</Label>
                                <Col sm={8}>
                                    <Input
                                        className="p-1 px-2"
                                        type="text"
                                        name="dateOfBirth"
                                        value={userDetails.dateOfBirth || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="my-1">
                            <Row>
                                <Label sm={2}>Phone</Label>
                                <Col sm={8}>
                                    <Input
                                        className="p-1 px-2"
                                        type="number"
                                        name="mobileNumber"
                                        value={userDetails.mobileNumber || ''}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>

                    {!isEditing && (
                        <Button color="warning" onClick={handleEditClick}>
                            Edit
                        </Button>
                    )}
                    {isEditing && (
                        <Button color="warning" onClick={handleSaveClick}>
                            Save
                        </Button>
                    )}
                </CardBody>
            </Card>
        </div>
    );
}

export default ProfileHome;
