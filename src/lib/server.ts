"use server";
import { Resend } from "resend";
import MessageEmail from "../emails/message";
import ThanksEmail from "@/emails/thanks";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  locale?: "en" | "pt-BR";
};

export async function sendMessage(data: FormData) {
  await sendMail(data);
  await sendDiscord(data);
}

const resend = new Resend(process.env.RESEND_API_KEY);

const subjects = {
  en: "Thanks for your contact!",
  "pt-BR": "Obrigado pelo seu contato!",
};

async function sendMail(data: FormData) {
  const { email, message, name, subject, locale } = data;

  const sender = process.env.MAIL_SEND_USER || "contato@rafaelcarmo.dev";
  const recievers = process.env.MAIL_RECIEVE?.split(",") || [
    "test@email.com",
  ];

  resend.emails.send({
    from: sender,
    to: recievers,
    subject: `Novo contato de ${data.name} - ${data.email}`,
    react: MessageEmail({
      email,
      message,
      name,
      subject,
    }),
  });


  resend.emails.send({
    from: sender,
    to: email,
    subject: locale ? subjects[locale] : subjects["pt-BR"],
    react: ThanksEmail({
      name,
      locale,
    }),
  });
}

async function sendDiscord({ name, email, subject, message }: FormData) {
  const content = `
    Mensagem recebida de <strong>${name} - ${email}</strong>\nAssunto: ${subject}\nMensagem:\n${message}`;

  const url = process.env.DISCORD_API_URL;

  if (!url) throw new Error("Discord API url not be empty");

  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
    }),
  });
}
