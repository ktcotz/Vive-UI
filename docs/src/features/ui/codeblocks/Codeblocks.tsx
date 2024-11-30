import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styled from "./Codeblocks.module.css";

type CodeblocksProps = {
  content: string;
};

export const Codeblocks = ({ content }: CodeblocksProps) => {
  return (
    <div className={styled.container}>
      <Tabs className={styled.tabs}>
        <TabItem default value="react" label="React">
          <CodeBlock language="jsx" showLineNumbers>
            {content}
          </CodeBlock>
        </TabItem>
      </Tabs>
    </div>
  );
};
