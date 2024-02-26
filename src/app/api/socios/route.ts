import { NextResponse } from "next/server";
import {prisma} from './../../libs/prisma'

export async function GET() {

    const socios = await prisma.socios.findMany();

    const sociosStringified = JSON.parse(JSON.stringify(socios, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));

return NextResponse.json(sociosStringified);
}