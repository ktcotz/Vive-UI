import { navigation } from "@/lib/navigation";
import { Header } from "../_components/layout/header";
import { GithubButton } from "../_components/github-button";
import { HomeIntro } from "../_components/layout/home-intro";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header>
        <Header.Nav>
          <Header.Logo />
          <div className="ml-auto">
            <Header.HeaderNavList items={navigation} />
          </div>
          <Header.Actions>
            <GithubButton />
          </Header.Actions>
        </Header.Nav>
      </Header>
      <main>
        <HomeIntro />
      </main>
    </div>
  );
}
