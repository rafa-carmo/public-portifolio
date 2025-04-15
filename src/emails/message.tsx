import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type * as React from "react";

interface ThanksEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const baseUrl = process.env.SITE_URL
  ? process.env.SITE_URL
  : "https://rafaelcarmo.dev";

export const MessageEmail = ({
  name,
  email,
  message,
  subject,
}: ThanksEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Preview>Mensagem Recebida</Preview>
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`${baseUrl}/static/designer.svg`}
            width="260"
            height="150"
            alt="RafaelCarmo"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              <Text className="text-3xl font-bold">
                Mensagem recebida de {name} - {email}
              </Text>
              <Text className="text-gray-500 text-base mt-10">
                Assunto: {subject}
              </Text>
            </Heading>

            <Section className="mt-45">
              <Heading className="text-center leading-8 my-10">
                <Text className="text-gray-500 text-base mt-10">
                  Mensagem: {message}
                </Text>
              </Heading>
            </Section>
          </Container>

          <Container className="mt-20">
            <Text className="text-center text-gray-400 mb-45">
              Rafael do Carmo, Rio de janeiro - RJ, Brasil
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessageEmail;
