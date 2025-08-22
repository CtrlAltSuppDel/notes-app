import Note from "./Note";
const NoteList = ({ notes }) => {
  if (notes.length == 0)
    return (
      <div className="text-center text-gray-500 font-semibold">
        No notes yet
      </div>
    );

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
