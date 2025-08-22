const Note = ({ note }) => {
  return (
    <div className="border-l-2 rounded-lg mb-4 bg-white shadow-lg p-4">
      <h3 className="font-semibold ">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Category</strong> :{" "}
        <span className="font-light">{note.category}</span>
      </p>
      <p className="text-sm text-gray-600">
        <strong>Priority</strong> :{" "}
        <span className="font-light">{note.prio}</span>
      </p>
      <p className="mt-2">{note.desc}</p>
    </div>
  );
};

export default Note;
