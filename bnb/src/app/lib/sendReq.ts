'use server'
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
//import { UserContactInfo } from '@/data/UserContactInfo';

export default async function sendReq(phoneNumber:any, email:any, message:any) {
   
    try {
      if (!phoneNumber || !email || !message) throw new Error('all form fields are required');
      await sql`INSERT INTO request (email, phone, descrip) VALUES (${email}, ${phoneNumber}, ${message});`;
    } catch (error) {

      return NextResponse.json({ error }, { status: 500 });
    }
  }