import React from 'react';
import parse from "html-react-parser";

const Returns = (props) => {
    return (

        <div className="container">
            <div className="row">
                <div className="bg-danger mt-2 rounded-1 text-white p-2 text-center text-uppercase">
                    <span className="p-1">returns policy</span>
                </div>

                <div className="card">
                    <hr/>
                    <div>
                        {parse(props.Returns[0]['long_des'])}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Returns;