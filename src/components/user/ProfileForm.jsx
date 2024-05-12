"use client";
import React, {useState} from 'react';
import SubmitButton from "@/components/master/SubmitButton";
import {ErrorToast, IsEmpty, SuccessToast} from "@/utility/FormHelper";
import{useRouter} from "next/navigation";

const ProfileForm = (props) => {

    const [data,setData]=useState(
        {
            firstName:props.data['firstName'],
            lastName:props.data['lastName'],
            mobile:props.data['mobile'],
            email:props.data['email'],
            password:props.data['password'],
        }
    )

    const [submit,setSubmit]=useState(false);
    const router=useRouter()

    const inOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = async () => {

        if(IsEmpty(data.firstName)){
            ErrorToast('First Name Required')
        }
        else if(IsEmpty(data.lastName)){
            ErrorToast('Last Name Required')
        }
        else if(IsEmpty(data.mobile)){
            ErrorToast('Mobile Number Required')
        }
        else if(IsEmpty(data.email)){
            ErrorToast('Email Required')
        }
        else if(IsEmpty(data.password)){
            ErrorToast('Password Required')
        }
        else {
            setSubmit(true);
            const options={method:'POST',body:JSON.stringify(data)};
            const res= await (await fetch('/api/user/profile/update',options)).json();
            setSubmit(false);
            setData("");

            if(res['status']==='success'){
                SuccessToast('User Update Succesfully ')
                router.refresh();

            }
            else {
                ErrorToast('Request Not Successfull')
            }
        }

    }

    return (
        <div className="row h-100 justify-content-center mt-4">
            <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
                <div className="card container-fluid animated fadeIn p-5 gradient-bg">
                    <div className="row ">
                        <h5 className="mb-1 mx-0 px-0">User Update</h5>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">First Name</label>
                            <input value={data.firstName} onChange={(e)=>{inOnChange('firstName',e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Last Name</label>
                            <input value={data.lastName} onChange={(e)=>{inOnChange('lastName',e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Mobile</label>
                            <input value={data.mobile} onChange={(e)=>{inOnChange('mobile',e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Email</label>
                            <input value={data.email} onChange={(e)=>{inOnChange('email',e.target.value)}} type="email" className="form-control"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Password</label>
                            <input value={data.password} onChange={(e)=>{inOnChange('password',e.target.value)}} type="password" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <SubmitButton onClick={formSubmit}className="btn btn-danger w-100 mt-3" submit={submit} text="Save Changes"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ProfileForm;