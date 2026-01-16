import React from "react";

type BaseProps<T> = {
  label: string;
  name: string;
  onChange: (value: T) => void;
};

type TextInputProps = BaseProps<string> & {
  type: "text";
  value: string;
  placeholder?: string;
};

type RadioInputProps = BaseProps<string> & {
  type: "radio";
  value: string;
  options: string[];
};

type CheckboxInputProps = BaseProps<string[]> & {
  type: "checkbox";
  values: string[];
  options: string[];
};

type FormInputProps =
  | TextInputProps
  | RadioInputProps
  | CheckboxInputProps;

const FormInput: React.FC<FormInputProps> = (props) => {
  const renderInput = () => {
    switch (props.type) {
      case "radio": {
        const { label, name, value, options, onChange } = props;
        return (
          <>
            <label>{label}</label>
            {options.map((opt) => (
              <label key={opt}>
                <input
                  type="radio"
                  name={name}
                  value={opt}
                  checked={value === opt}
                  onChange={(e) => onChange(e.target.value)}
                />
                {opt}
              </label>
            ))}
          </>
        );
      }

      case "checkbox": {
        const { label, values, options, onChange } = props;
        return (
          <>
            <label>{label}</label>
            {options.map((opt) => {
              const checked = values.includes(opt);
              return (
                <label key={opt}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      onChange(
                        checked
                          ? values.filter((v) => v !== opt)
                          : [...values, opt]
                      )
                    }
                  />
                  {opt}
                </label>
              );
            })}
          </>
        );
      }

      case "text": {
        const { label, value, placeholder, onChange } = props;
        return (
          <>
            <label>{label}</label>
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </>
        );
      }

      default:
        return null;
    }
  };

  return <div className="form-group">{renderInput()}</div>;
};

export default FormInput;
