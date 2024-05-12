import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import Returns from "@/components/master/Returns";


async function getData(){
    let Returns=(await (await fetch(`${process.env.HOST}/api/policy?type=Returns`)).json())['data']
    return{Returns:Returns};
}
const Page = async () => {
    const data= await getData();
    return (
        <PlainLayout>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-12 px-3">
                        <div className="">
                            <Returns Returns={data['Returns']}/>
                        </div>
                    </div>

                </div>
            </div>
        </PlainLayout>
    );
};

export default Page;