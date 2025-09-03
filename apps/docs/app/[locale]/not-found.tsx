import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "../_components/button";

export default function NotFound() {
  const t = useTranslations("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        {t("404.title")}
      </p>

      <div className="mt-6 flex flex-col md:flex-row gap-3">
        <Button asChild variant="default">
          <Link href="/">{t("404.goHome")}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/docs">{t("404.goDocs")}</Link>
        </Button>
      </div>
    </div>
  );
}
