import ToasProvider from "@/providers/toast";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import Clarity from "@microsoft/clarity";

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
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "";
  if (projectId) Clarity.init(projectId);

  return (
    <html lang={locale ?? "en"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ToasProvider>{children}</ToasProvider>
        </NextIntlClientProvider>
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
