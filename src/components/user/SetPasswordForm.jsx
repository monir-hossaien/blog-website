"use client"
import React, {useState} from 'react';
import SubmitButton from "@/components/master/SubmitButton";
import {ErrorToast, GetEmail, GetOTP, IsEmpty, SuccessToast} from "@/utility/FormHelper";
import {useRouter} from "next/navigation";

const SetPasswordForm = () => {
    let [data,setData]=useState({email:GetEmail(),otp:GetOTP(),password:""});
    let [submit,setSubmit]=useState(false);
    let router=useRouter();

    const inputOnChange = (name,value) => {
      setData((data)=>({
          ...data,
          [name]:value
      }))
    }

    const formSubmit =async () => {
      if (IsEmpty(data.password)){
          ErrorToast("Valid Password Required")
      }
      else{
          setSubmit(true);
          const options={method:"POST",body:JSON.stringify(data)};
          const res=await (await fetch('/api/user/recover/resetPassword',options)).json();
          setSubmit(false);

          if(res['status']==='success'){
              SuccessToast("Password Reset Successfull")
              sessionStorage.clear()
              router.push('/user/login')
          }
          else{
              ErrorToast("Invalid Request")
          }
      }
    }
    return (
        <div className="row h-100 justify-content-center center-screen">
            <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
                <div className="card animated fadeIn p-5 gradient-bg">
                    <h5 className="mb-3">New Password</h5>
                    <input value={data.password} onChange={(e)=>{inputOnChange('password',e.target.value)}} placeholder="xxxxxxxxxxx" type="password" className="form-control mb-2"/>
                    <SubmitButton onClick={formSubmit} className="btn btn-danger mt-3" submit={submit} text="Next"/>
                </div>
            </div>
        </div>
    );
};

export default SetPasswordForm;