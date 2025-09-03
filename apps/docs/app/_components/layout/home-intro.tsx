import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "../badge";
import { CtaButton } from "../cta-button";
import { useTranslations } from "next-intl";

export const HomeIntro = () => {
  const t = useTranslations("");

  return (
    <section className="mx-auto container relative flex flex-col items-center justify-center space-y-8 px-4 py-16 md:py-32">
      <div className="flex items-center gap-2 animate-float">
        <Badge
          variant="secondary"
          className="flex gap-2 bg-gradient-to-r from-primary/40 to-secondary/40 border-primary/30"
        >
          <Sparkles className="w-3 h-3" />
          <span className="font-medium">{t("home.intro.badge-start")}</span>
        </Badge>
        <span className="text-sm text-accent-foreground/60">
          {t("home.intro.badge-title")}
        </span>
      </div>

      <div className="max-w-5xl text-center relative">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1] mb-8">
          {t("home.intro.heading-start-title")}{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
            {t("home.intro.heading-end-title")}
          </span>
        </h1>
        <p className="max-w-3xl text-lg text-accent-foreground/60 sm:text-2xl mx-auto leading-relaxed">
          {t("home.intro.heading-start-description")}{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t("home.intro.heading-end-description")}.
          </span>
        </p>
      </div>

      <div className=" flex flex-col gap-3 md:gap-6 md:flex-row">
        <CtaButton size="lg">
          <span className="relative z-10">
            {t("home.intro.heading-primary-button")}
          </span>
          <ArrowRight className="ml-2 h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
        </CtaButton>

        <CtaButton size="lg" variant="outline">
          <span className="relative z-10">
            {t("home.intro.heading-secondary-button")}
          </span>
        </CtaButton>
      </div>
    </section>
  );
};
