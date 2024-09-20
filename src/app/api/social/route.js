import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function GET (req,res){
    try{
        const prisma=new PrismaClient();
        const result=await prisma.socials.findMany();
        console.log(result)
        return NextResponse.json({status:'success',data:result});
    }catch (e) {
        return NextResponse.json({status:'fail',data:e});

    }
}
