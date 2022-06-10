import Card from "../Cards/index";
import styled from "styled-components";

function AllCards({
  /** AllCards component */
  iconCalories,
  iconCarbs,
  iconFat,
  iconProtein,
  userAccount,
}) {
  const CardsContainer = styled.div`
    max-width: 250px;
    max-height: 700px;
  `;

  return (
    <CardsContainer>
      <Card
        image={iconCalories}
        value={userAccount?.keyData ? userAccount.keyData.calorieCount : null}
        type={"Calories"}
      ></Card>
      <Card
        image={iconProtein}
        value={
          userAccount?.keyData ? userAccount.keyData.carbohydrateCount : null
        }
        type={"Proteines"}
      ></Card>
      <Card
        image={iconCarbs}
        value={userAccount?.keyData ? userAccount.keyData.lipidCount : null}
        type={"Glucides"}
      ></Card>
      <Card
        image={iconFat}
        value={userAccount?.keyData ? userAccount.keyData.proteinCount : null}
        type={"Lipides"}
      ></Card>
    </CardsContainer>
  );
}

export default AllCards;
