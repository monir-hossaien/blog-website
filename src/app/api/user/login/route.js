import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {CreateToken} from "@/utility/JWTTokenHelper";

export async function POST(req,res){
    try {
        const reqBody=await req.json();
        const prisma=new PrismaClient();

        const result=await prisma.users.findUnique({where:reqBody})
           

        if(result.length===0){
            return  NextResponse.json({status:"fail",data:result})
        }
        else {

            const token = await CreateToken(result['email'],result['id']);
            const expireTime=new Date(Date.now()+24*60*60*1000);
            const cookieString=`token=${token};expires=${expireTime.toUTCString()}; path=/`;

            return NextResponse.json({status:'success',data:token},{status:200,headers:{'set-cookie':cookieString}});

        }
    }
    catch (e) {

        return  NextResponse.json({status:"fail",data:e})

    }
}


export async function GET(req,res) {
    let expireDuration=new Date(Date.now() - 24*60*60*1000 );
    const response = NextResponse.redirect(new URL('/', req.url),303);
    response.cookies.set('token', '', { expires: expireDuration });
    return response;
}