import styled from "styled-components";
import cardMediaImage from "../../images/illustration-hero.svg";
import { H1, P } from "../Typography/Typography";
import Button from "../Button/Button";
import PlanSummary from "../PlanSummary/PlanSummary";

const CardWrapper = styled.div`
  width: 350px;
  height: 550px;
  background-color: white;
  display: grid;
  grid-template-rows: 30% auto;
  border-radius: 1.5em;
  overflow: hidden;
  text-align: center;
  
  box-shadow: ${props => props.theme.colors.dropShadow};
  -webkit-box-shadow: ${props => props.theme.colors.dropShadow};
`;

const CardMediaHero = styled.div`
  background-image: url(${cardMediaImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardBody = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const CardTitle = ({title}) => {
  return <H1>{title}</H1>
}

const CardDescription = ({description}) => {
  return <P>{description}</P>
}

const CardButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  margin: auto 0 0 0;
`;


function Card({title, description, primaryButton, secondaryButton}) {
  return (
    <CardWrapper>
      <CardMediaHero/>
      <CardBody>
        <CardTitle title={title}/>
        <CardDescription description={description}/>
        <PlanSummary />
        {
          primaryButton && (
            <CardButtonsContainer>
              <Button text={primaryButton} />
              { secondaryButton && <Button variant="secondary" text={secondaryButton}/> }
            </CardButtonsContainer>
          )
        }
      </CardBody>
    </CardWrapper>
  )
}

export default Card;
