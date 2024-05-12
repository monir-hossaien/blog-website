import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {headers} from "next/headers";
const prisma=new PrismaClient();

export async function GET(req,res){
    try{
        const headerList=headers();
        const id=parseInt(headerList.get('id'));
        let result=await prisma.comments.findMany({
            where:{userID:id},
            include:{news_list:{select:{title:true}}}
        })
        return NextResponse.json({status:'success',data:result});
    }catch (e) {
        return NextResponse.json({status:'fail',data:e});
    }
}

export async function POST(req,res){
    try{
        const headerList=headers();
        const id=parseInt(headerList.get('id'));

        const reqBody=await req.json();
        reqBody.userID=id
        const result=await prisma.comments.create({
            data:reqBody
        })
        return NextResponse.json({status:'success',data:result});
    }catch (e) {
        return NextResponse.json({status:'fail',data:e});
    }
}

export async function DELETE(req,res){
    try{
        const headerList=headers();
        let user_id=parseInt(headerList.get('id'));

        const reqBody=await req.json();
        const comment_id=parseInt(reqBody['id']);

        const result=await prisma.comments.deleteMany({
            where:{
                AND:[
                    {userID:user_id},
                    {id:comment_id}
                ]
            }
        })
        return NextResponse.json({status:'success',data:result});
    }catch (e) {
        return NextResponse.json({status:'fail',data:e});
    }
}