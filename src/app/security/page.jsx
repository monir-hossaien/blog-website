import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import Security from "@/components/master/Security";


async function getData(){
    let Security=(await (await fetch(`${process.env.HOST}/api/policy?type=Security`)).json())['data']
    return{Security:Security};
}
const Page = async () => {
    const data=await getData();
    return (
        <PlainLayout>
               <div className="container mt-3">
                   <div className="row">
                       <div className="col-md-12 col-lg-12 col-sm-12 col-12 px-3">
                           <div className="">
                               <Security Security={data['Security']}/>
                           </div>
                       </div>

                   </div>
               </div>
        </PlainLayout>
    );
};

export default Page;