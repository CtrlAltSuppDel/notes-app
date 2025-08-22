import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";
const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    prio: "Medium",
    desc: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.desc) return;

    // Create note object
    const newNote = { id: Date.now(), ...formData };

    // Update the global state
    setNotes([newNote, ...notes]);

    // Clear the form
    setFormData({
      title: "",
      category: "Work",
      prio: "Medium",
      desc: "",
    });
  };

  return (
    <>
      {/* Toggle form visibility button */}
      <button
        className="w-full bg-gray-100 border-purple-300 border text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-300 hover:border-purple-300 transition mb-4"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Hide form ✖️" : "Add New Note ➕"}
      </button>
      {/* Form */}
      {isFormVisible && (
        <form className="mb-6" onSubmit={onSubmit}>
          {/* Title */}
          <TextInput
            label={"Title"}
            value={formData.title}
            onChange={handlechange}
            name={"title"}
          />

          {/* Priority */}
          <SelectInput
            name={"priority"}
            label={"Priority"}
            onChange={handlechange}
            value={formData.prio}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟡 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />

          {/* Category */}
          <SelectInput
            name={"category"}
            label={"Category"}
            onChange={handlechange}
            value={formData.category}
            options={[
              { value: "Work", label: "🏢 Work" },
              { value: "Personnal", label: "🏠 Personnal" },
              { value: "Ideas", label: "💡 Ideas" },
            ]}
          />

          {/* Description */}
          <TextAreaInput
            label={"Description"}
            name={"desc"}
            value={formData.desc}
            onChange={handlechange}
          />

          {/* Submit button */}
          <div className="mb-4">
            <input
              type="submit"
              value="Add note"
              className="bg-purple-600 w-full p-2 border rounded-lg text-white font-semibold cursor-pointer active:bg-purple-400"
            />
          </div>
        </form>
      )}
    </>
  );
};

export default NoteForm;
