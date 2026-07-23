export interface SelectOption {
  label: string;
  value: string;
}

export interface SingleSelectProps {
  label: string;
  data: SelectOption[];
  value: string;
  placeholder?: string;
  searchable?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export interface MultiSelectProps {
  data: SelectOption[];
  values: string[];

  placeholder?: string;
  searchable?: boolean;
  disabled?: boolean;

  onChange: (values: string[]) => void;
}
