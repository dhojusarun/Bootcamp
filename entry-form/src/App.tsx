import { useState } from "react";
import "./App.css";

type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

type RadioGroupProps = {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="options">
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

type CheckboxGroupProps = {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckboxGroup({
  label,
  options,
  selectedValues,
  onChange,
}: CheckboxGroupProps) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="options">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedValues.includes(option)}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSubjects((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <form className="form-base" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>

        <InputField
          label="Full Name"
          type="text"
          placeholder="Enter full name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        <RadioGroup
          label="Gender"
          name="gender"
          options={["Male", "Female"]}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <CheckboxGroup
          label="Subjects"
          options={["Maths", "English", "Computer"]}
          selectedValues={subjects}
          onChange={handleSubjectChange}
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>

        {submitted && (
          <div className="result">
            {fullname && (
              <p>
                <strong>Full Name:</strong> {fullname}
              </p>
            )}
            {gender ? (
              <p>
                <strong>Gender:</strong> {gender}
              </p>
            ) : (
              <p className="error">Please select gender</p>
            )}
            {subjects.length > 0 && (
              <p>
                <strong>Subjects:</strong> {subjects.join(", ")}
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
