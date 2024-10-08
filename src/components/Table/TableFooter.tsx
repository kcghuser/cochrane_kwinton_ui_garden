import React from 'react';
import styled from 'styled-components';

const StyledTableFooter = styled.td`
  padding: 8px;
  background-color: #f0f0f0;
  text-align: left;
  font-weight: bold;
`;

export const TableFooter: React.FC = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};