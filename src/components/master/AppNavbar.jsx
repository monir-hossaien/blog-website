"use client"
import React, {useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";

const AppNavBar = (props) => {

    let[keyword,setKeyword]=useState("");

    return (
        <div>
            <div className="py-2 bg-dark text-white container-fluid">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <h6><i className="bi bi-calendar2-check"></i>  Today:<span> {new Date().getDay()}/{new Date().getMonth()}/{new Date().getFullYear()} </span></h6>
                        </div>
                        <div className="col-md-4">
                            <span className="float-end">
                            <a target="_blank" className="text-white" href={props.data['socials'][0]['facebook']}><i className="mx-2 bi bi-facebook"></i></a>
                            <a target="_blank" className="text-white" href={props.data['socials'][0]['youtube']}><i className="mx-2 bi bi-youtube"></i></a>
                            <a target="_blank" className="text-white" href={props.data['socials'][0]['twitter']} ><i className="mx-2 bi bi bi-twitter"></i></a>
                            <a target="_blank" className="text-white" href={props.data['socials'][0]['linkedin']} ><i className="mx-2 bi bi-linkedin"></i></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar expand="lg" className="bg-white sticky-top shadow-sm">
                <div className="container">
                    <div className="navbar-brand">
                        <img className="nav-logo" src={"/images/logo.svg"} alt="img"/>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto ms-3 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Link className="nav-link f-13" href="/">Home</Link>
                            {
                                props.data['categories'].map((item,i)=>{
                                    return <Link key={i} className="nav-link f-13"  href={`/category?id=${item['id']}`} >{item['name']}</Link>
                                })
                            }
                        </Nav>
                        <div className="d-flex ms-3">
                            <div className="input-group">
                                <input onChange={(e)=>{setKeyword(e.target.value)}} type="text" className="form-control" placeholder="Search..."/>
                                <Link href={keyword===""?("/"):(`/search?keyword=${keyword}`)} className="btn btn-danger" type="button"><i className="bi bi-search"></i></Link>
                            </div>
                        </div>
                        {
                            props.isLogin?(
                                <>
                                    <div className="float-right mx-3 h-auto d-flex">
                                        <div className="user-dropdown">
                                            <img className="icon-nav-img icon-nav" src="/images/profile.png" alt=""/>
                                            <div className="user-dropdown-content ">
                                                <div className="mt-4 text-center">
                                                    <img className="icon-nav-img" src="/images/profile.png" alt=""/>
                                                    <hr className="user-dropdown-divider p-0"/>
                                                </div>
                                                <Link href="/profile" className="side-bar-item">
                                                    <span className="side-bar-item-caption">Profile</span>
                                                </Link>

                                                <Link href="/comments" className="side-bar-item">
                                                    <span className="side-bar-item-caption">Comments</span>
                                                </Link>

                                                <a href="/api/user/login" className="side-bar-item">
                                                    <span className="side-bar-item-caption">Logout</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            ):(
                                <>
                                    <Link href="/user/login" className="btn ms-3 btn-outline-danger">Login</Link>
                                </>

                            )
                        }

                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default AppNavBar;