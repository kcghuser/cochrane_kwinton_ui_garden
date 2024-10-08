export interface DropdownProps {
  options: Array<{ label: string; value: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}