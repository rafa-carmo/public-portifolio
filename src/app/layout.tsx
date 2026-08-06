import ToasProvider from "@/providers/toast";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale ?? "en"}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D484CQFXMX"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-D484CQFXMX');
        </script>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ToasProvider>{children}</ToasProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
