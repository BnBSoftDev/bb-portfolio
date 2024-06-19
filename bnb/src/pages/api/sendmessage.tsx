import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from "mysql2/promise"
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const db = await mysql.createConnection({
        host: "localhost",
        database: "bnb",
        user: "root",
        password: "root"
    })
    try{
        const query = "insert into request(email,phone,descrip) values('" + req.body.email + "','" + req.body.phone + "','" + req.body.desc + "');";
        await db.execute(query);

    }catch(error){
        res.status(500).json({error});
        console.log(error);
    }
}