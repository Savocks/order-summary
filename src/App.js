import styled from "styled-components";

import backgroundImageDesktop from './images/pattern-background-desktop.svg';
import backgroundImageMobile from './images/pattern-background-mobile.svg';
import Card  from "./components/Card/Card";


const Wrapper = styled.div`
  background-image: url(${backgroundImageDesktop});
  background-color: ${props => props.theme.colors.primaries.paleBlue};
  background-repeat: no-repeat;
  background-size: contain;
  
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 425px) {
    background-image: url(${backgroundImageMobile});
  }
`;

const title = 'Order Summary';

const description = 'You can now listen to milions of songs, audiobooks, and podcasts on any device anywhere you like!'

function App() {
  return (
    <Wrapper>
      <Card title={title} description={description} primaryButton="Proceed to Payment" secondaryButton="Cancel"/>
    </Wrapper>
  );
}

export default App;
