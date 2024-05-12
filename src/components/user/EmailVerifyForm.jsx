"use client"
import React, {useState} from 'react';
import SubmitButton from "@/components/master/SubmitButton";
import {ErrorToast, IsEmail, SuccessToast, SetEmail} from "@/utility/FormHelper";
import {useRouter} from "next/navigation";

const EmailVerifyForm = () => {

    let [data, setData]=useState({email:""});
    let [submit,setSubmit]=useState(false);
    let router=useRouter();

    const inOnChange = (name,value) => {
      setData((data)=>({
          ...data,
          [name]:value
      }))
    }

    const formSubmit = async () => {
      if(IsEmail(data.email)){
          ErrorToast("Valid Email Address Required")
      }
      else{
          setSubmit(true);
          const res=await (await fetch(`/api/user/recover/verifyEmail?email=${data.email}`)).json();
          setSubmit(false);

          if(res['status']==='success') {
              SuccessToast('Request Completed')
              SetEmail(data.email);
              router.push("/user/otpVerify");
          }
          else{
              ErrorToast('Invalid Request')
          }

      }
    }

    return (
        <div className="row h-100 justify-content-center center-screen">
            <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
                <form className="card animated fadeIn p-5 gradient-bg">
                    <h5 className="mb-3">Email Address</h5>
                    <label className="form-label">User Email</label>
                    <input value={data.email} onChange={(e)=>{inOnChange('email',e.target.value)}} type="email" className="form-control mb-2"/>
                    <SubmitButton onClick={formSubmit} className="btn btn-danger mt-3" submit={submit} text="Next"/>
                </form>
            </div>
        </div>

    );
};

export default EmailVerifyForm;