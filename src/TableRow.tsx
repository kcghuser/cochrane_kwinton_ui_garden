import React from 'react';
import styled from 'styled-components';

export const TableRow: React.FC = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;