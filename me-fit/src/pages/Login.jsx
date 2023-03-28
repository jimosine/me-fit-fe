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
        <div className="login-box">
            <div id="carouselExampleCaptions " className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + "/pexels-andrea-piacquadio-3757954.jpg"} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Best workout plan for men and women</h5>
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
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "/pexels-victor-freitas-703016.jpg"} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Join our latest uptodate program</h5>
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
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "/pexels-william-choquette-1954524.jpg"} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Do as many exercise that you can</h5>
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
    // <div>
    //     <br/>
    //     {!keycloak.authenticated &&<button className={"btn btn-primary"} onClick={login}>Login</button>}
    //     {keycloak.authenticated &&<Link to="/dashboard"><button className={"btn btn-primary"}>Go to dashboard</button></Link>}
    // </div>
