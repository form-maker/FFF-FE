import React from "react";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";

const StatsCommentContainer = ({ children }) => {
  return <CommentContainer>{children}</CommentContainer>;
};

const CommentContainer = styled.div`
  display: flex;
  justify-content: end;

  padding-right: 2.9rem;
  p {
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export default StatsCommentContainer;
