import React from 'react';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableRow: React.FC = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};