import Layout from "@theme/Layout";
import { Hero } from "../features/hero/Hero";
import { Wrapper } from "../features/ui/Wrapper";
import { FeaturesBox } from "../features/features-box/FeaturesBox";

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
          <div>asd</div>
        </div>
      </Wrapper>
    </Layout>
  );
}
