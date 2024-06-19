import styled from 'styled-components';

export default function Loading() {
  return <LoadingWrapper>Loading...</LoadingWrapper>;
}

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
