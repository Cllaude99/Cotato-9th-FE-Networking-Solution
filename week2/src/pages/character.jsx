import styled from 'styled-components';

export default function Characters() {
  return (
    <Container>
      <Title>Characters</Title>
      <Lists>
        <Item>Good Guy A</Item>
        <Item>Good Guy B</Item>
        <Item>Bad Guy A</Item>
        <Item>Bad Guy B</Item>
      </Lists>
    </Container>
  );
}

const Container = styled.div``;
const Title = styled.h3`
  font-size: 18px;
  padding: 7px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px;
  }
`;
const Lists = styled.ul``;
const Item = styled.li`
  @media (max-width: 768px) {
    font-size: 8px;
    padding: 0px 3px;
  }
`;
