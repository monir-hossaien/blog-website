import React from 'react';
import AppNavbar from "@/components/master/AppNavbar";
import Footer from "@/components/master/Footer";
import {Toaster} from "react-hot-toast";
import {cookies} from "next/headers";

async function getData(){
    let socials= (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
    let categories= (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
    return {socials:socials,categories:categories}
}

const PlainLayout = async (props) => {
    const data=await getData();


    const cookieStore=cookies();
    const token=cookieStore.get("token");

    let isLogin=false;
    isLogin=typeof token!=="undefined"


    return (
        <>
            <AppNavbar  isLogin={isLogin} data={data}/>
            {props.children}
            <Toaster position={"top-right"}/>
            <Footer data={data}/>
        </>
    );
};

export default PlainLayout;