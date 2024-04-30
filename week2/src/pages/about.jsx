import styled from 'styled-components';

export default function About() {
  return (
    <Container>
      <Title>About</Title>
      <Info>This is a website to discover great books and authors</Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 24px;
  margin: 40px 0px 60px;
`;
const Info = styled.p``;
