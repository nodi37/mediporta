export type SelectInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: Array<{ title: string; value: string }>;
};
