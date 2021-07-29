import React from "react";
import { HeaderWrapper } from "./Style";

import Wrap from './Wrap';

function Header() {
  return <>
    <HeaderWrapper>
      <Wrap>
        <h1>Order</h1>
      </Wrap>
    </HeaderWrapper>
  </>;
}

export default Header;
