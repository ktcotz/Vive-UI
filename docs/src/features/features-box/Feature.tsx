import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Features.module.css";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type FeatureProps = {
  title: string;
  description: string;
  icon: IconDefinition;
};

export const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className={styled.feature}>
      <div className={styled["feature__icon-box"]}>
        <FontAwesomeIcon icon={icon} className={styled.feature__icon} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
