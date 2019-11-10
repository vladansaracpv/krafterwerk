import React, { useEffect } from "react";
import { Note, NOTE } from "ann-music-note";
import "./Note.css";

function NoteContainer(props) {
  const { name, midi, frequency } = { ...props };
  let note = name
    ? Note(name)
    : midi
    ? Note(midi)
    : frequency
    ? Note(frequency)
    : NOTE.EmptyNote;

  useEffect(() => {}, []);

  return <div className="note-container">{note.name}</div>;
}
export default NoteContainer;
