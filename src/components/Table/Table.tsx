import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';
import styled from 'styled-components';

interface TableProps {
  headers: string[];
  data: string[][];
  footer: string[];
  disabled?: boolean;
}

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

export const Table: React.FC<TableProps> = ({ headers, data, footer, disabled }) => {
  return (
    <StyledTable disabled={disabled}>
      <thead>
        <TableRow>
          {headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
      <tfoot>
        <TableRow>
          {footer.map((cell, index) => (
            <TableFooter key={index}>{cell}</TableFooter>
          ))}
        </TableRow>
      </tfoot>
    </StyledTable>
  );
};