import React from "react";

import { Wrapper, Content } from "./Button.styles";

const Button = ({callback, text}) => (
    <Wrapper>
      <Content type="button" onClick={callback}>
          {text}
      </Content>
    </Wrapper>
);

export default Button;