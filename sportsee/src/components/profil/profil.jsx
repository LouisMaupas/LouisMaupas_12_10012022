import styled from "styled-components";

export default function Profil({profils}) {

    const profilsList = profils.map((el, index) =>
    <li key={index} >{el}</li>
    )

    // styled-component
    const ProfilLabel = styled.div`
    display: none;
    `

    return (
      <ProfilLabel>
          <ul>
            {profilsList}
          </ul>
      </ProfilLabel>
    )
}