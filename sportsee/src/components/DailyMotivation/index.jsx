import styled from "styled-components";

// styled-component
const DailyMotivationLabel = styled.div`
  color: black;
`;
/**
 * DailyMotivation component
 * @returns
 */
export default function DailyMotivation() {
  return (
    <DailyMotivationLabel>
      Félicitation ! Vous avez explosé vos objectifs hier 👏
    </DailyMotivationLabel>
  );
}
