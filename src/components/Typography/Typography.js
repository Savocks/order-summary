import styled from "styled-components";

const H1 = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.h1.fontSize};
  color: ${props => props.theme.colors.neutrals.darkBlue};
  margin: 0.5em 0;
`;

const H2 = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.h2.fontSize};
  color: ${props => props.theme.colors.neutrals.darkBlue}
`;

const P = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.p.fontSize};
  color: ${props => props.theme.colors.neutrals.desaturatedBlue}
`;

const A = styled.a`
  font-family: ${props => props.theme.typography.fontFamily};
  color: ${props => props.theme.colors.primaries.brightBlue};
  font-size: ${props => props.theme.typography.a.fontSize};
  
  transition: all 100ms ease-in-out;
  text-decoration: underline;
  font-weight: 900;
  cursor: pointer;
  &:active {
    color: ${props => props.theme.colors.neutrals.desaturatedBlue};
    text-decoration: none;
    font-weight: 700;
  }
`;

export { H1, H2, P, A };
