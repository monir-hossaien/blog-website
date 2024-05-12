import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import {cookies} from "next/headers";
import ProfileForm from "@/components/user/ProfileForm";

async function getData(cookies){
    let option={method:'GET', headers:{'cookie':cookies},cache:'no-store'}
    let Profile=(await (await fetch(`${process.env.HOST}/api/user/profile/details`,option)).json())['data'];
    return{Profile:Profile};
}
const Page = async () => {

    const cookieStore=cookies();
    const data=await getData(cookieStore);

    return (
        <PlainLayout>
             <ProfileForm data={data['Profile']}/>
        </PlainLayout>
    );
};

export default Page;