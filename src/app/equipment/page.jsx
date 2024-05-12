import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import Equipment from "@/components/master/Equipment";


async function getData(){
    let Equipment=(await (await fetch(`${process.env.HOST}/api/policy?type=Equipment`)).json())['data']
    return{Equipment:Equipment};
}
const Page = async () => {
    const data= await getData();
    return (
        <PlainLayout>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-12 px-3">
                        <div className="">
                            <Equipment Equipment={data['Equipment']}/>
                        </div>
                    </div>

                </div>
            </div>
        </PlainLayout>
    );
};

export default Page;