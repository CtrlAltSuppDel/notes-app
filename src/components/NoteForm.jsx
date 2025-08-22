import { useState } from "react";
const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [prio, setPrio] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [desc, setDesc] = useState("");

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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={prio}
          onChange={(e) => setPrio(e.target.value)}
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          value={desc}
          className="w-full p-2 border rounded-lg"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
    </form>
  );
};

export default NoteForm;
