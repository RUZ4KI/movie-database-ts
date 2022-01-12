import React from "react";

import { Wrapper, Content } from "./Button.styles";

type Props = {
  callback : () => void,
  text : string
}

const Button : React.FC<Props> = ({callback, text}) => (
    <Wrapper>
      <Content type="button" onClick={callback}>
          {text}
      </Content>
    </Wrapper>
);

export default Button;