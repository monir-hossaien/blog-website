"use client"
import React, {useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import CommentForm from "@/components/news/CommentForm";

const CommentsList = (props) => {
    const [key,setKey]=useState("Comments")
    return (
        <div className="container">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k)=>setKey(k)} className="mb-3">
                <Tab eventKey="Comments" title="Comments">
                    <ul className="list-group bg-transparent list-group-flush">
                        {
                            props.data.map((item,i)=>{
                                return  <li className="list-group-item bg-transparent">
                                    <h6 className="text-dark">
                                        <i className="bi bi-person-circle"></i> {item['users']['firstName']}
                                    </h6>
                                    <p className="text-secondary">{item['descriptions']}</p>
                                </li>
                            })
                        }
                    </ul>
                </Tab>
                <Tab eventKey="Create" title="Create">
                    <CommentForm postID={props.postID} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default CommentsList;