import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./../globals.css";
import "vive-ui/dist/styles.css";
import { cn } from "@/lib";
import { fontMono, fontSans } from "@/lib/fonts";
import { Header } from "../_components/layout/header";
import { Sidebar } from "../_components/layout/sidebar";
import { TableOfContents } from "../_components/layout/table-of-contents";

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
        <NextIntlClientProvider>
          <div className="min-h-screen bg-background transition-colors duration-30">
            <Header />
            <div className="flex h-[calc(100vh-3.5rem)]">
              <Sidebar />
              <main className="flex-1 overflow-y-auto">
                <div className="flex">
                  <div className="flex-1 flex justify-center min-w-0">
                    <div className="w-full max-w-4xl px-6 py-6 lg:py-8">
                      {children}
                    </div>
                  </div>
                  <div className="hidden xl:block w-64 shrink-0">
                    <div className="sticky top-6 h-[calc(100vh-8rem)] overflow-y-auto">
                      <div className="px-6 py-4">
                        <TableOfContents />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
