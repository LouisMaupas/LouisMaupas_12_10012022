import styled from "styled-components";

const WelcomeContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const WelcomeName = styled.div`
  color: red;
`;

/**
 * Welcome component
 * @param {*} userName
 * @returns
 */
export default function Welcome(userName) {
  return (
    <WelcomeContainer className="welcome">
      Bonjour{" "}
      <WelcomeName className="welcome__name">{userName.userName}</WelcomeName>
    </WelcomeContainer>
  );
}
