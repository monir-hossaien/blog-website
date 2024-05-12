import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req,res){
    try{
        const reqBody=await req.json();
        const prisma=new PrismaClient();
        const count=await prisma.users.count({
            where:{email:reqBody['email'], otp:reqBody['otp']}
        });
        if(count===1){
            await prisma.users.update({
                where:{email:reqBody['email']},
                data:{otp:'0',password:reqBody['password']}
            })
            return NextResponse.json({status:'success',data:'Password reset successful'})
        }
        else {
            return NextResponse.json({status:'fail',data:'Password reset fail'})
        }
    }
    catch (e) {
        return NextResponse.json({status:'fail',data:e})
    }
}