import { useState } from "react";
const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    prio: "Medium",
    desc: "",
  });

  const handlechange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="mb-6">
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
    </form>
  );
};

export default NoteForm;
