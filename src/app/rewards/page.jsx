import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import PopularList from "@/components/news/PopularList";
import Rewards from "@/components/master/Rewards";


async function getData(){
    let Rewards=(await (await fetch(`${process.env.HOST}/api/policy?type=Rewards`)).json())['data']

    return{Rewards:Rewards};
}
const Page = async () => {
    const data= await getData();
    return (
        <PlainLayout>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-12 px-3">
                        <div className="">
                            <Rewards Rewards={data['Rewards']}/>
                        </div>
                    </div>

                </div>
            </div>
        </PlainLayout>
    );
};

export default Page;