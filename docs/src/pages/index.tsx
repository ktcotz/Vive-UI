import Layout from "@theme/Layout";
import { Hero } from "../features/hero/Hero";
import { Wrapper } from "../features/ui/wrapper/Wrapper";
import { FeaturesBox } from "../features/features-box/FeaturesBox";
import { Codeblocks } from "../features/ui/codeblocks/Codeblocks";
import { home_codeblock } from "../features/ui/codeblocks/data";

export default function Page() {
  return (
    <Layout title="Home" description="Vive UI library documentation">
      <div className="pattern" />
      <Wrapper>
        <Hero />
      </Wrapper>
      <Wrapper>
        <div className="features-box">
          <FeaturesBox />
          <Codeblocks content={`${home_codeblock}`} />
        </div>
      </Wrapper>
    </Layout>
  );
}
