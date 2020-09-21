import { NextApiRequest, NextApiResponse } from 'next'
import config from "../../../../config"

const handler = async (req:NextApiRequest,res:NextApiResponse) => {
  try{
    if(!req.headers.authorization){
     throw new Error("Authorization needed")
    }
    const allUser = await fetch(`${config.SERVER_URL}/users`,{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Authorization":`Bearer ${req.headers.authorization.split(" ")[1]}`
      }
    })
    const result = await allUser.json()
    return res.status(200).json(result)
  }catch(err){
    return res.status(400).json({
      message:err.message || "Something went wrong"
    })
  }
}

export default handler
