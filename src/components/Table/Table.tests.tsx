import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('Table is visible', () => {
  render(
    <Table
      headers={['Header 1', 'Header 2']}
      data={[
        ['Cell 1-1', 'Cell 1-2'],
        ['Cell 2-1', 'Cell 2-2'],
      ]}
      footer={['Footer 1', 'Footer 2']}
    />
  );
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeVisible();
});

test('Table changes appearance when disabled', () => {
  const { container } = render(
    <Table
      headers={['Header 1', 'Header 2']}
      data={[
        ['Cell 1-1', 'Cell 1-2'],
        ['Cell 2-1', 'Cell 2-2'],
      ]}
      footer={['Footer 1', 'Footer 2']}
      disabled
    />
  );
  const tableElement = container.querySelector('table');
  expect(tableElement).toHaveStyle('opacity: 0.5');
});