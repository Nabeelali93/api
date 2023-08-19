import { NextResponse} from "next/server";
import {data} from '../test/db'


export async function POST(request){

let {name} = await request.json()

let res = data.filter((v)=>v.name.toLocaleLowerCase()==name.toLocaleLowerCase())


if(res.length>0){
    return NextResponse.json({
        data:res,
        status:"ok"
            })   
}

else{
    res=["Record not found"]
    return NextResponse.json({
        data:res,
        status:"ok"
            }) 
}


  
}
