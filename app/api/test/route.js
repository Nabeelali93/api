import { NextRequest,NextResponse } from "next/server";
import { data } from "./db";


export async function GET(){



    return NextResponse.json({
        data:data
    })


}


