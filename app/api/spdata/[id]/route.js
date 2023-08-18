import { NextRequest,NextResponse } from "next/server";
import { data } from "../../test/db";


export async function GET(request,content){

    const user = data.filter((v)=>v.name==content.params.id)

    return NextResponse.json({
        data: user
    })


}


