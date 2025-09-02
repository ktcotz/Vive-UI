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
        className={cn("antialiased", fontSans.className, fontMono.variable)}
      >
        <NextIntlClientProvider
          messages={(await import(`../../messages/${locale}.json`)).default}
        >
          <div className="fixed inset-0 pattern-dots opacity-30 animate-pulse" />
          <div className="fixed inset-0 pattern-grid opacity-20" />
          <div className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-float" />
          <div
            className="fixed bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div className="relative">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
