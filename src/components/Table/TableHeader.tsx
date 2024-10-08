import React from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.th`
  padding: 8px;
  background-color: #f0f0f0;
  text-align: left;
  font-weight: bold;
`;

export const TableHeader: React.FC = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};