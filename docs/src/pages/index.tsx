import Layout from "@theme/Layout";
import { Hero } from "../features/hero/Hero";
import { Wrapper } from "../features/ui/Wrapper";

export default function Page() {
  return (
    <Layout title="Home" description="Vive UI library documentation">
      <div className="pattern" />
      <Wrapper>
        <Hero />
      </Wrapper>
      asd
    </Layout>
  );
}
