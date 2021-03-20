import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import './SignIn.css';

const SignIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState( false)

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
      .signInWithPopup(googleProvider)
      .then(res => { console.log(res);
        const {displayName, email} = res.user;
        const signedInUser = {
        isSignedIn: true,
        name:displayName,
        email:email,
        }
        setLoggedInUser(signedInUser);
        history.replace(from);
     })
     .catch(err =>{
       console.log(err);
     })
    }
   

    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if(e.target.name === 'password'){
          const isPasswordValid = e.target.value.length > 5;
          const passwordHasNumber = /\d{1}/.test(e.target.value)
          isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(e.target.name === "name"){
            isFieldValid = e.target.value;
           }
        if(isFieldValid){
          const newUserInfo = {...loggedInUser};
          newUserInfo[e.target.name] = e.target.value;
          setLoggedInUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {    
        if(newUser && loggedInUser.email && loggedInUser.password){
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
              const newUserInfo = {...loggedInUser};
              newUserInfo.error= '';
              newUserInfo.success = true;
              setLoggedInUser(newUserInfo);
            })
            .catch((error) => {
              const newUserInfo = {...loggedInUser};
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setLoggedInUser(newUserInfo);
            });
          }
          
          if(!newUser && loggedInUser.email && loggedInUser.password){
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
              const newUserInfo = {...loggedInUser};
              newUserInfo.error= '';
              newUserInfo.success = true;
              setLoggedInUser(newUserInfo);
            })
              
            .catch((error) => {
              const newUserInfo = {...loggedInUser};
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setLoggedInUser(newUserInfo);
            });
          }
          
          e.preventDefault();
           }

    return (
        <div>
            <Container style={{marginTop: '50px',}}>
            <Row>
            <Col className="form-part">
            <div className="login-area" style={{textAlign:'center'}}>
                {newUser ? <h3>Create an account</h3> : <h3>Login</h3>}
                <form onSubmit={handleSubmit}>
                    {newUser && <input className='form-control' type="text" name="name" onBlur={handleBlur} id="" placeholder="Your Name" required/>}
                    <br/>
                    <input className='form-control' type="text" name="email" onBlur={handleBlur} id="" placeholder="Your Email address" required/>
                    <br/>
                    <input className='form-control' type="password" name="password" onBlur={handleBlur} id="" placeholder="Your Password" required/>
                    <br/>
                    {newUser && <input className='form-control' type="password" name="confirm-password" onBlur={handleBlur} id="" placeholder="Confirm Password" required/>}
                    <br/>
                    <input className='form-control btn btn-danger' type="submit" value={newUser ? 'Sign Up' : 'Login'}/>
                </form>
                <br/>

                <input type="checkbox" name="newUser" onChange={()=>setNewUser(!newUser)} id=""/>
                <label htmlFor="newUser">New User Sign up</label>
                <p style={{color:'red'}}>{loggedInUser.error}</p>
                {loggedInUser.success && <p style={{color:'white'}}>User {newUser ? 'created' : 'Logged In'} Successfully</p>}
            </div>
            <div className="google-btn">
              <button className="btn btn-light" onClick={handleGoogleSignIn}>Continue with Google</button>
            </div>
            </Col>
            
                
            </Row>
            </Container>
        </div>
    );
};

export default SignIn;