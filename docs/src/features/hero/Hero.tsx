import Link from "@docusaurus/Link";
import styled from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styled.hero}>
      <div className={styled.hero__content}>
        <h1 className={styled.hero__title}>
          <span className={styled.hero__special}>Customizable </span> and{" "}
          <span className={styled.hero__special}>accessible </span> UI
          components
        </h1>
        <p className={styled.hero__text}>
          Vive UI is a UI library with over 5+ components designed to be
          reusable. Works only for a React framework.
        </p>
        <div className={styled.hero__links}>
          <Link className={styled.hero__start}>Get Started</Link>
          <Link className={styled.hero__components}>Show Components</Link>
        </div>
      </div>
      <div className={styled.hero__decorative} />
      <span className={styled["hero__decorative-title"]}>V</span>
    </div>
  );
};
