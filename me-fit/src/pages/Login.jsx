import * as React from 'react';
import keycloak from "../keycloak";

function Login() {

    function login(){
        keycloak.login();
    }


    return (
        <div>
            <br/>
            <button className={"btn btn-primary"} onClick={login}>Login</button>
        </div>
    );
};

export default Login;
