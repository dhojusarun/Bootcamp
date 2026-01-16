import React, { Component } from "react";
import FormInput from "./../components/FormInput";
import FormResult from "./../components/FormResult";
import "./Entryform.css";

class EntryForm extends Component {
  state = {
    fullName: "",
    selectedGender: "",
    selectedSubjects: [] as string[],
    isSubmitted: false
  };

  handleFullNameChange = (value: string) => {
    this.setState({ fullName: value });
  };

  handleGenderChange = (value: string) => {
    this.setState({ selectedGender: value });
  };

  handleSubjectsChange = (values: string[]) => {
    this.setState({ selectedSubjects: values });
  };

  handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  render() {
    const { fullName, selectedGender, selectedSubjects, isSubmitted } = this.state;

    return (
      <div className="form-container">
        <form className="form-card" onSubmit={this.handleFormSubmit}>
          <h1>Registration Form</h1>

          <FormInput
            label="Full Name"
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={this.handleFullNameChange}
          />

          <FormInput
            label="Gender"
            type="radio"
            name="gender"
            options={["Male", "Female"]}
            value={selectedGender}
            onChange={this.handleGenderChange}
          />

          <FormInput
            label="Subjects"
            type="checkbox"
            name="subjects"
            options={["Maths", "Social", "English", "Nepali"]}
            values={selectedSubjects}
            onChange={this.handleSubjectsChange}
          />

          <button type="submit">Submit</button>

          {isSubmitted && (
            <FormResult
              description={fullName}
              gender={selectedGender}
              subjects={selectedSubjects}
            />
          )}
        </form>
      </div>
    );
  }
}

export default EntryForm;
