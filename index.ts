import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors  from 'cors'

const bot =express()

bot.use(cors({origin:true}))

bot.post('/',async(req,res)=>{
    const telegramText=req.body
    &&req.body.message
    &&req.body.message.chat
    &&req.body.message.chat.id
    &&req.body.message.from
    &&req.body.message.from.first_name
    
    if(telegramText){
        const chat_id = req.body.message.chat.id
        const first_name=req.body.message.from.first_name
       

        return res.status(200).send({
            method:'sendmessage',
            chat_id ,
            text:` Hello ${first_name}` 
        })
    }
    return res.status(200).send({status: 'and error occured'})
})
export const router = functions.https.onRequest(bot)
