import { up } from "styled-breakpoints";
import styled from "styled-components";

const Footer = () => (
  <Container>
    <h3>It's time to bring back your shelf-confidence</h3>
  </Container>
);

export default Footer;

const Container = styled.footer`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 0.5px;

  ${up("tablet")} {
    background-color: transparent;
    background-image: url("/shapes/green_footer.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: 0% 100%;
    padding: 50px 20px;
    height: 400px;
    margin-top: -100px;

    h3 {
      margin-top: 280px;
    }
  }
`;
