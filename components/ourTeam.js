import styled from "styled-components";
import { up } from "styled-breakpoints";
import { theme } from "../styles/theme";

const OurTeam = () => (
  <Container id="our-team">
    <h2>Our team</h2>
    <ul>
      <li>Roland Zonai</li>
      <li>Jack Attewell</li>
      <li>Zach Lawrence</li>
      <li>Jon Powers</li>
      <li>Daisy Simonis</li>
      <li>Ahmed ElNahas</li>
      <li>Xiangyang Huang</li>
      <li>JinYi Yang</li>
      <li>Emily Kondziola</li>
      <li>Anna Shannon</li>
      <li>Yegor Golovnia</li>
      <li>Margaret Beardsley</li>
      <li>Ankit Joshi</li>
      <li>Sai Sandeep</li>
      <li>Hannah Kruglikov</li>
      <li>Will Krugman</li>
      <li>LMY</li>
      <li>Alisa Chan</li>
      <li>Katherine Peterson</li>
      <li>Mina Ky</li>
      <li>Alex Bray</li>
      <li>Emily Dong</li>
      <li>Nick Oelsner</li>
      <li>Jasmine Woo</li>
    </ul>
  </Container>
);

export default OurTeam;

const Container = styled.section`
  color: ${theme.colors.body};
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1em;
  padding-top: 100px;
  padding-bottom: 100px;

  ${up("tablet")} {
    font-size: 1.5em;
    padding-top: 150px;
    padding-bottom: 150px;
  }

  h2 {
    color: ${theme.colors.text};
  }

  ul {
    list-style: none;
    padding: 0;
    font-weight: bold;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18ch, auto));

    li {
      padding: 0.25em 0;
    }
  }
`;
