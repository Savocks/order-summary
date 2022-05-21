import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: ${props => props.theme.colors.primaries.brightBlue};
  border: 0;
  border-radius: 10px;
  
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.button.fontSize};
  font-weight: ${props => props.theme.typography.button.fontWeight};
  color: ${props => props.theme.colors.neutrals.veryPaleBlue};
  
  cursor: pointer;
  padding: .7em;
  margin: .5em 0;
  -webkit-box-shadow: ${({theme}) => theme.colors.dropShadow};
  box-shadow: ${({theme}) => theme.colors.dropShadow};
  
  transition: background-color 100ms ease-in-out;
  
  &:active {
    background-color: ${props => props.theme.colors.neutrals.desaturatedBlue};
  }
`;

const SecondaryButton = styled.button`
  border: 0;
  padding: .7em;
  margin: .5em 0;

  cursor: pointer;

  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.button.fontSize};
  font-weight: ${props => props.theme.typography.button.fontWeight};

  color: ${props => props.theme.colors.neutrals.desaturatedBlue};
  transition: background-color 100ms ease-in-out;

  &:active {
    color: ${props => props.theme.colors.neutrals.darkBlue};
  }
`;


function Button({variant = 'primary', text}) {
  return (
    <>
      { variant && variant === 'primary' && <PrimaryButton>{text}</PrimaryButton> }
      { variant && variant === 'secondary' && <SecondaryButton>{text}</SecondaryButton> }
    </>
  )
}

export default Button;
