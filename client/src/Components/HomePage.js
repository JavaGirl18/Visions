import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class HomePage extends Component {
    render() {

        const responseGoogle = (response) => {
            console.log(response);
          }
          const responseFacebook = (response) => {
            console.log(response);
          }  
          
        return (
            <div>
                I am home page
   <GoogleLogin
    clientId="530758102451-i1nkf831ql9ogq6ma0jku8n8aqulhalh.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
);
            </div>

        );
    }
}

export default HomePage;