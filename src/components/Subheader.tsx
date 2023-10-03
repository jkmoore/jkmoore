import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  a:hover {
    color: #00D816;
  }
`;

export default function Header({ subheader }) {
  if (!subheader) {
    return null;
  }
  const githubFullLink = "https://" + subheader.github;
  const mailToLink = "mailto:" + subheader.email;
  return (
    <StyledDiv>
      <a href={mailToLink}><p>{subheader.email}</p></a>
      <a href={githubFullLink}><p>{subheader.github}</p></a>
    </StyledDiv>
  );
}
