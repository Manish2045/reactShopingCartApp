// import React from 'react'
// import './Styles/loginPageStyle.css'

// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// function LoginPage() {

//     const navigate = useNavigate();

//     const handleSkip = () => {
//             navigate('/');
    
//     };





//   return (
//       <div >
          
          
//           <div onClick={handleSkip} className="closing-login"></div>



//           <div className="login-page">
//               <div className="upper-div">
//                   {/* <Button onClick={handleSkip} className='skip-Button' variant="link">Slip</Button> */}
//                   <button onClick={handleSkip} className='skip-Button' variant="link" >Skip</button>
//                   <div className="login-bg">
//                       <img src="https://firebasestorage.googleapis.com/v0/b/whatsappclone-d3f9a.appspot.com/o/spring%2FUntitled%20design%20(8).png?alt=media&token=191cb15a-b4b7-47d0-9e9c-3b9669a7b820" alt="" />
//                   </div>

//                   <div className="div">
//                       <h1>Login/Signup</h1>
//                       <p>for a tailored experience</p>
//                   </div>


//               </div>
//               <div className="lower-div">
//                   <div className="x">
//                       <input type="text" placeholder="Enter Phone Number" />
//                       <button>CONTINUE</button>
//                       <p>
//                           Login using
//                           <a href="#">Email</a>
//                       </p>
//                   </div>
//                   <div className="y">
//                       By signing up you agree to our
//                       <p>Terms of Service & Privacy Policy</p>
//                   </div>
//               </div>
//           </div>
//       </div>
//   )
// }

// export default LoginPage

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/loginPageStyle.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import base_URL from '../api/BootAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isCustomerLogin, setCustomerLogin] = useState(true);
    const [incorrect, setIncorrect] = useState(false);
    
    const handleSkip = () => {


        navigate('/')
    };


    const handleLoginTypeToggle = () => {
        setCustomerLogin((prevState) => !prevState);
    };


    const handleAdminLogin = () => { 
        

        const adminCredentials = {
            fullName :'admin',
            password :'admin'
        }
      

        if (adminCredentials.fullName === username && adminCredentials.password === password) {
            toast.success('Login successful!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
            localStorage.setItem('ADMIN', JSON.stringify(adminCredentials));
            localStorage.removeItem('USER');
            navigate('/admin');
        }
        else {
            setIncorrect(true)
            toast.error('wrong credential!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
        }
        
    }
    const handleLogin = async () => {
        try {
            const user = {
                fullName: username,
                password: password
            }
            const response = await axios.post(`${base_URL}/userlogin`, user);

            if (response.status === 200) {
                const user = response.data;

                // Store the user credentials globally (e.g., in local storage or context)
                
                if (user.fullName === username && user.password === password) {
                    setIncorrect(false)
                    toast.success('Login successful!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
                    localStorage.setItem('USER', JSON.stringify(user));
                    localStorage.removeItem('ADMIN');
                    navigate('/');
                }
                else {
                    setIncorrect(true)
                    toast.error('wrong credential!', { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
                }

                // Do any additional logic or redirect to another route if needed
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div>
            <ToastContainer />
            <div onClick={handleSkip} className="closing-login"></div>

            <div className={`login-page ${isCustomerLogin ? '' : 'admin-login'}`}>
                <div style={{ backgroundColor: isCustomerLogin ? '' : 'green' }} className="upper-div">
                    <button onClick={handleSkip} className="skip-Button" variant="link">
                        Skip
                    </button>
                    <div className="login-bg">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/whatsappclone-d3f9a.appspot.com/o/spring%2FUntitled%20design%20(8).png?alt=media&token=191cb15a-b4b7-47d0-9e9c-3b9669a7b820"
                            alt=""
                        />
                    </div>

                    
                    <div className="div">
                        <h1>{isCustomerLogin ? 'Login/Signup' : 'Admin Login'}</h1>
                        {isCustomerLogin && <p>for a tailored experience</p>}
                    </div>
                </div>

                <div className="lower-div">
                    <div className="x">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p style={{color: 'red'}}>
                            {incorrect? 'incorrect Username & password' : ''}
                        </p>
                        <button onClick={isCustomerLogin ? handleLogin:handleAdminLogin}>CONTINUE</button>
                    </div>
                    <div className="y">
                        <Button style={{backgroundColor: 'transparent', color:'blue'}} color="link" onClick={handleLoginTypeToggle}>
                            {isCustomerLogin ? 'Admin login' : 'Customer login'}
                        </Button>
                      
                       <br />
                        By signing up you agree to our
                        <p>Terms of Service & Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
