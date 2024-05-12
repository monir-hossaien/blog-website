import React from 'react';
import Subscribe from "@/components/news/Subscribe";
import Link from "next/link";

const PopularList = (props) => {
    return (
        <div className="row">
            <div className="bg-dark mt-2 rounded-1 text-white p-2 text-center">
                <span className="p-1">POPULAR</span>
            </div>
            {
                props.popular.map((item,i)=>{
                    return(
                        <div className="col-12 py-1 px-0">
                            <Link href={`/details?id=${item['id']}`} className=" card bg-white shadow-sm">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img className=" rounded-start-1 w-100 h-100" src={item['img4']} alt="News Image" />
                                    </div>
                                    <div className="col-md-7 p-3">
                                        <h6>{item['title']}</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            <div className="bg-dark mt-2 rounded-1 text-white p-2 text-center">
                <span className="p-1">SUBSCRIBE</span>
            </div>
            <div className="col-12 py-1 px-0">
                <Subscribe />
            </div>
        </div>

    );
};

export default PopularList;