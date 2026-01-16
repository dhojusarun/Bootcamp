type FormResultProps = {
  description: string;
  gender: string;
  subjects: string[];
};

const FormResult: React.FC<FormResultProps> = ({
  description,
  gender,
  subjects,
}) => {
  const hasDescription = description.trim().length > 0;
  const hasGender = gender.trim().length > 0;
  const hasSubjects = subjects.length > 0;

  return (
    <div className="result">
      {hasDescription && (
        <p>
          <strong>Description:</strong> {description}
        </p>
      )}

      {hasGender ? (
        <p>
          <strong>Gender:</strong> {gender}
        </p>
      ) : (
        <p className="error">Please select gender</p>
      )}

      {hasSubjects && (
        <p>
          <strong>Subjects:</strong> {subjects.join(", ")}
        </p>
      )}
    </div>
  );
};

export default FormResult;
