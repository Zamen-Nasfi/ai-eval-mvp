import {NextResponse} from 'next/server';
export async function POST(req:Request){const body=await req.json().catch(()=>null);if(!body?.answer)return NextResponse.json({error:'answer is required'},{status:400});return NextResponse.json({mode:'evidence-limited',message:'MVP analysis is currently performed in the browser; external verification is not claimed.'})}
