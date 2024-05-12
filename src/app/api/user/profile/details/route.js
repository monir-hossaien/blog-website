import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {headers} from "next/headers";
export async function GET(req,res){

    try {
        const headerList=headers();
        const id=parseInt(headerList.get('id'))
        const prisma=new PrismaClient();
        const result=await prisma.users.findUnique({
            where:{id:id}
        });

        return  NextResponse.json({status:"success",data:result})

    }catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}