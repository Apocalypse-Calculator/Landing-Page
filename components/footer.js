import styled from 'styled-components';

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
  letter-spacing: .5px;
`;
