const TextAreaInput = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        className="w-full p-2 border rounded-lg"
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
