import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
//import { UserContactInfo } from '@/data/UserContactInfo';

interface UserContactInfo {
  phoneNumber: string | undefined;
  email: string | undefined;
  message: string | undefined;
}

export default async function sendReq(userContactInfo: UserContactInfo) {
   
    try {
      if (!userContactInfo.email || !userContactInfo.message || !userContactInfo.phoneNumber) throw new Error('all form fields are required');
      await sql`INSERT INTO request (email, phone, descrip) VALUES (${userContactInfo.email}, ${userContactInfo.phoneNumber}, ${userContactInfo.message});`;
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    const requests = await sql`SELECT * FROM Request;`;
    return NextResponse.json({ requests }, { status: 200 });
  }