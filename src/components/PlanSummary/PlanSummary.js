import styled from "styled-components";
import { MusicIcon } from "../Icon/Icon";
import { A } from '../Typography/Typography';
const PlanSummaryWrapper = styled.div`
  margin: 1em 0;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const PlanSummaryIcon = styled.span`
  margin-right: 1em;
`;

const PlanSummaryDescription = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const PlanSummaryName = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: 900;
  color: ${props => props.theme.colors.neutrals.darkBlue};
  font-size: 16px;
`;

const PlanSummaryPricing = styled.p`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.colors.neutrals.desaturatedBlue};
`;

const PlanSummaryChangeButton = styled(A)`
  margin-left: auto;
`

function PlanSummary(props) {
  return (
    <PlanSummaryWrapper>
      <PlanSummaryIcon>
        <MusicIcon/>
      </PlanSummaryIcon>
      <PlanSummaryDescription>
        <PlanSummaryName>Annual Plan</PlanSummaryName>
        <PlanSummaryPricing>$59.99/Annual</PlanSummaryPricing>
      </PlanSummaryDescription>
      <PlanSummaryChangeButton>Change</PlanSummaryChangeButton>
    </PlanSummaryWrapper>
  )
}

export default PlanSummary;



