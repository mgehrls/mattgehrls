import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from "@sendgrid/mail"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(process.env.SENDGRID_API_KEY !== undefined){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }

    const msg = {
      to: 'mattgehrls@gmail.com',
      from: 'matt@mattgehrls.com',
      subject: 'message from mattgehrls.com',
      text: `Name: ${req.body.name}, Email: ${req.body.email}, Subject: ${req.body.subject}, Message: ${req.body.message}`,
      html: `<strong>Name: ${req.body.name}<br/> Email: ${req.body.email}<br/> Subject: ${req.body.subject}<br/> Message: ${req.body.message}</strong>`
    }

    return await sgMail
    .send(msg)
    .then((x) => {
      if(x[0].statusCode === 200){
        res.status(x[0].statusCode).json({message: "success"})
      } else {
        res.status(x[0].statusCode).json({message: "error"})
       }
    })
}