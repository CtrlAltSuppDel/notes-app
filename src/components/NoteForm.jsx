import { useState } from "react";
const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    prio: "Medium",
    desc: "",
  });

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
    <form className="mb-6" onSubmit={onSubmit}>
      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          onChange={handlechange}
        />
      </div>

      {/* Priority */}
      <div className="mb-4">
        <label htmlFor="prio" className="block font-semibold">
          Priority
        </label>
        <select
          type="text"
          name="prio"
          id="prio"
          className="w-full p-2 border rounded-lg"
          value={formData.prio}
          onChange={handlechange}
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>

      {/* Category */}
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>
        <select
          type="text"
          name="category"
          id="category"
          className="w-full p-2 border rounded-lg"
          value={formData.category}
          onChange={handlechange}
        >
          <option value="Work">🏢 Work</option>
          <option value="Personnal">🏠 Personnal</option>
          <option value="Ideas">💡 Ideas</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="desc" className="block font-semibold">
          Description
        </label>
        <textarea
          name="desc"
          id="desc"
          value={formData.desc}
          className="w-full p-2 border rounded-lg"
          onChange={handlechange}
        ></textarea>
      </div>

      {/* Submit button */}
      <div className="mb-4">
        <input
          type="submit"
          value="Add note"
          className="bg-purple-600 w-full p-2 border rounded-lg text-white font-semibold cursor-pointer active:bg-purple-400"
        />
      </div>
    </form>
  );
};

export default NoteForm;
