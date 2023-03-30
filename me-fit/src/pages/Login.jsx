import * as React from 'react';
import keycloak from "../keycloak";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import { useEffect } from "react";
import { isContributorRole } from "../utils/user"
import { storeProfileSession } from '../utils/api';

function Login() {
    const navigate = useNavigate()

    useEffect(() => {
        console.log(isContributorRole())
        if (keycloak.authenticated) {
            sessionStorage.setItem("id", keycloak.subject)
            storeProfileSession()
            checkProfile(keycloak.subject.toString())
            navigate("/dashboard")
        }
    },)


    const createHeaders = () => {
        return {
            "Content-Type": "application/json",
        }
    }

    async function createprofile(id, firstname, lastname) {
        await fetch("https://me-fit-nl.azurewebsites.net/profile", {
            method: "POST",
            headers: createHeaders(),
            body: JSON.stringify({
                "userId": id,
                "firstname": firstname,
                "lastname": lastname
            })
        })
    }

    async function checkProfile(profileId) {
        const userInfo = await keycloak.loadUserInfo();
        const res = await fetch(`https://me-fit-nl.azurewebsites.net/profile/userid/${profileId}`);
        if (!res.ok) {
            // navigate("/profile")
            createprofile(userInfo.sub, userInfo.given_name, userInfo.family_name)
        }
    }

    function login() {
        keycloak.login();
    }

    function createAccount() {
        keycloak.register()
    }


    return (
        <div>
            <img src={process.env.PUBLIC_URL + "/pexels-andrea-piacquadio-3757954.jpg"} className={"background-img"}/>
            <div className={"login-box"}>
                <div className="card">
                    <div className="card-body">
                        <h5 className={"card-title"}>Best workout plan for men and women</h5>
                        {!keycloak.authenticated && <p>Don't have a account. Let make one!</p>}
                        {!keycloak.authenticated && <div className={"row"}>
                            <div className="col-md-6">
                                <button className={"btn btn-primary float-end"} onClick={createAccount}>Create Account</button>
                            </div>
                            <div className="col-md-6">
                                <button className={"btn btn-primary float-start"} onClick={login}>Login</button>
                            </div>
                        </div>}
                        {keycloak.authenticated && <Link to={"/dashboard"}><button className={"btn btn-primary"}>Dashboard</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

