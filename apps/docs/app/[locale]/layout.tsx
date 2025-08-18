import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./../globals.css";
import "vive-ui/dist/styles.css";
import { cn } from "@/lib";
import { fontMono, fontSans } from "@/lib/fonts";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-svh bg-background font-sans antialiased",
          fontSans.className,
          fontMono.variable
        )}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
