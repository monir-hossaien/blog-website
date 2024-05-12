import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import {cookies} from "next/headers";
import UserCommentsList from "@/components/comments/User-comments-list";

async function getData(cookies) {
    let option={method: 'GET', headers: {'Cookie': cookies}, cache: 'no-store'}
    let Comments = (await (await fetch(`${process.env.HOST}/api/comments/manage`,option)).json())['data'];
    return { Comments: Comments };
}

const Page =async () => {

    const cookieStore = cookies()
    let data=await getData(cookieStore);

    return (
        <PlainLayout>
            <UserCommentsList data={data['Comments']}/>
        </PlainLayout>
    );
};

export default Page;