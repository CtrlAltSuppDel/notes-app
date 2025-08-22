const TextInput = ({ label, name, onChange, value }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
