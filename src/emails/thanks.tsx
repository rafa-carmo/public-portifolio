import contacts from "@/constants/contacts";
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type * as React from "react";

interface ThanksEmailProps {
  name: string;
  locale?: "en" | "pt-BR";
}

const baseUrl = process.env.SITE_URL
  ? process.env.SITE_URL
  : "http://localhost:3000";

const messages = {
  en: {
    header: "Thanks for your contact!",
    subtitle: "We will get back to you as soon as possible.",
    social: "Meanwhile, see more for my work on my social media:",
  },
  "pt-BR": {
    header: "Obrigado pelo seu contato!",
    subtitle: "Entraremos em contato com você o mais breve possível.",
    social:
      "Enquanto isso, veja mais sobre meu trabalho em minhas redes sociais:",
  },
};

export const ThanksEmail = ({ name, locale = "pt-BR" }: ThanksEmailProps) => {
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
        <Preview>{messages[locale].header}</Preview>
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
                {name}, {messages[locale].header}
              </Text>
              <Text className="text-gray-500 text-base mt-10">
                {messages[locale].subtitle}
              </Text>
            </Heading>

            <Section className="mt-45">
              <Heading className="text-center leading-8 my-10">
                <Text className="text-gray-500 text-base mt-10">
                  {messages[locale].social}
                </Text>
              </Heading>
              <Row className="text-center">
                {Object.keys(contacts.socials)
                  ?.filter((s) => s !== "email")
                  .map((social) => (
                    <Column key={social} className="">
                      <Link
                        className="text-black text-center"
                        href={
                          contacts.socials[
                            social as keyof typeof contacts.socials
                          ].url
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className=" bg-gray-100 rounded-lg px-2 pt-3">
                          {
                            contacts.socials[
                              social as keyof typeof contacts.socials
                            ].icon
                          }
                        </span>
                      </Link>
                    </Column>
                  ))}
              </Row>
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

export default ThanksEmail;
