"use server";
import { Resend } from "resend";
import ThanksEmail from "@/emails/thanks";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  locale?: "en" | "pt-BR";
};

export async function sendMessage(data: FormData) {
  await fetchWebhook(data);
  await sendMail(data);
}

const resend = new Resend(process.env.RESEND_API_KEY);

const subjects = {
  en: "Thanks for your contact!",
  "pt-BR": "Obrigado pelo seu contato!",
};

async function sendMail(data: FormData) {
  const { email, name, locale } = data;

  const sender = process.env.MAIL_SEND_USER || "contato@rafaelcarmo.dev";

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

async function fetchWebhook(data: FormData) {
  const { name, email, subject, message } = data;

  const url = process.env.WEBHOOK_URL;
  if (!url) {
    return;
  }
  const body = JSON.stringify({
    name,
    email,
    subject,
    message,
  });

  const token = Buffer.from(`${process.env.WEBHOOK_USER}:${process.env.WEBHOOK_PASSWORD}`).toString("base64")

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `basic ${token}`,
    },
    body,
  });


}

