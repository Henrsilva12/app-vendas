import { createConnection } from "../../lib/mysql"  //conexão com o bd
import { NextResponse } from "next/server"

export async function GET(){
    try{
        {/*captura as informações do banco e exibe para o usuário*/}
        const db = await createConnection()
        const sql = "select * from produtos"
        const [produtos] = await db.query(sql)
        return NextResponse.json(produtos)

        } catch(error){
        console.log(error)
        return NextResponse.json({error: error.message})
    }

    
}