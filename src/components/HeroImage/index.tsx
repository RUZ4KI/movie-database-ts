import React from "react";

import { Wrapper, Content, Text } from "./HeroImage.styles";

type Props = {
    title : string,
    text : string,
    image : string
}

const HeroImage : React.FC<Props> = ({title, image, text}) => (
    <Wrapper image={image}>
      <Content>
          <Text>
              <h1>{title}</h1>
              <p>{text}</p>
          </Text>
      </Content>
    </Wrapper>
);

export default HeroImage;

