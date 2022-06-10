import styled from "styled-components";

const WelcomeContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
`;
const WelcomeName = styled.div`
  color: red;
  margin-left: 1rem;
`;

/**
 * Welcome component
 * @param {*} userName
 * @returns
 */
export default function Welcome(userName) {
  return (
    <WelcomeContainer className="welcome">
      Bonjour
      <WelcomeName className="welcome__name">{userName.userName}</WelcomeName>
    </WelcomeContainer>
  );
}
