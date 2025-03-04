'use server'
import nodemailer from 'nodemailer'

export type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendMessage(data: FormData) {
  await sendMail(data)
  await sendDiscord(data)

}


async function sendMail(data: FormData){
  const host = process.env.MAIL_HOST || 'localhost'
        const port = Number(process.env.MAIL_PORT) || 1025
        const secure = process.env.MAIL_SECURE === 'true' || false
        const user = process.env.MAIL_SEND_USER || ''
        const pass = process.env.MAIL_SEND_PASS || ''
        const receive = process.env.MAIL_RECEIVE || ''

        const transaction = nodemailer.createTransport({
            host: host,
            port: port,
            secure,
            auth: {
              user: user,
              pass: pass
            }
          });

          try{ 
              const info = await transaction.sendMail({
                  from: `"Automatic message" <${user}>`, // sender address
                  to: receive, // list of receivers
                  subject: "Mensagem do Cliente", // Subject line
                  text: `
                  Mensagem do Cliente
                  Nome: ${data.name}
                  Email: ${data.email}
                  Assunto: ${data.subject}
                  Mensagem: ${data.message}
                  `
                })
                

                if(info.messageId){
                    return true
                }
            } 
            catch(err){
                console.log(err)
                return false
            }
}

async function sendDiscord({
  name,
  email,
  subject,
  message,
}: FormData) {
  const content = `
    Mensagem recebida de <strong>${name} - ${email}</strong>\nAssunto: ${subject}\nMensagem:\n${message}`

	const url = process.env.DISCORD_API_URL
  console.log(url)
	if (!url) throw new Error("Discord API url not be empty")

	await fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			content,
		}),
	})
}