interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    value: string;
    options: Option[];
    placeholder?: string;
    onChange: (value: string) => void;
}

export const Select = ({value, options, placeholder, onChange}: SelectProps) => (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);
