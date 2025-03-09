// src/components/Loading.js
import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  font-size: 24px;
`;

const Loading = () => (
  <LoadingContainer>
    Loading Game...
  </LoadingContainer>
);

export default Loading;
