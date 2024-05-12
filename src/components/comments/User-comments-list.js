"use client";
import React from 'react';
import {ErrorToast, SuccessToast} from "@/utility/FormHelper";
import {useRouter} from "next/navigation";

const UserCommentsList = (props) => {
    const router=useRouter();
    const onDelete = async (id) => {
        const options={method:'DELETE',body:JSON.stringify({id:parseInt(id)})}
        let res=await (await fetch("/api/comments/manage",options)).json();
        if(res['status']==="success"){
            SuccessToast("Request Completed");
            router.refresh();
        }
        else {
            ErrorToast("Invalid Request")
        }

    }

    return (
        <div className="container mt-3 ">
            <div className="row">
                <div className="col-12">
                    <div className="card py-2">
                        <ul className="list-group bg-transparent list-group-flush">
                            {
                                props.data.map((item, i) => {
                                    return <li className="list-group-item bg-transparent">
                                        <h6 className="text-dark">
                                            <i className="bi bi-newspaper"></i> {item['news_list']['title']}
                                        </h6>
                                        <p className="text-secondary">{item['descriptions']}</p>
                                        <button onClick={()=>onDelete(item['id'])} className="btn btn-danger btn-sm px-2">Remove</button>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCommentsList;