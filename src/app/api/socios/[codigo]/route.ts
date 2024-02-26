import { NextResponse } from "next/server";
import {prisma} from './../../../libs/prisma'

interface Params {
    params: {codigo: string}
}

export async function GET(request: Request, {params}: Params) {
    console.log(params.codigo)

    const socio = await prisma.socios.findFirst({
        where: {
            codigo: params.codigo
        }

    })
    const socioStringified = JSON.parse(JSON.stringify(socio, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
    ));

    return NextResponse.json(socioStringified)
}