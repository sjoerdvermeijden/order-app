import React from "react";

import { MainWrapper } from "./Style";
import Wrap from "./Wrap";

function Main({ children }) {
  return (
    <>
      <MainWrapper>
        <Wrap>
          <div className="main-inner">{children}</div>
        </Wrap>
      </MainWrapper>
    </>
  );
}

export default Main;
