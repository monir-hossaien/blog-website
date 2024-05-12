import React from 'react';
import parse from "html-react-parser";

const Rewards = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="bg-danger mt-2 rounded-1 text-white p-2 text-center text-uppercase">
                    <span className="p-1">rewards policy</span>
                </div>

                <div className="card">
                    <hr/>
                    <div className="">
                        {parse(props.Rewards[0]['long_des'])}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewards;