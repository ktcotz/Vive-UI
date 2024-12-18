import { features } from "./data";
import { Feature } from "./Feature";
import styled from "./Features.module.css";

export const FeaturesBox = () => {
  return (
    <div className={styled.features}>
      {features.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </div>
  );
};
