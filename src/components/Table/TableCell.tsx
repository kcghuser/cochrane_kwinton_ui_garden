import React from 'react';
import styled from 'styled-components';

const StyledTableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const TableCell: React.FC = ({ children }) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};