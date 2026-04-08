import React from "react";

const Notes = ({ startDate, endDate, notesMap, setNotesMap, currentDate }) => {
  const key =
    startDate && endDate
      ? `${currentDate.getFullYear()}-${currentDate.getMonth()}-${startDate}-${endDate}`
      : null;

  const currentNote = key ? notesMap[key] || "" : "";

  const handleChange = (e) => {
    if (!key) return;

    setNotesMap((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  return (
    <div>
      <h3>Notes</h3>

      {key ? (
        <p>
          Selected: {startDate} → {endDate}
        </p>
      ) : (
        <p>Select a date range</p>
      )}

      <textarea
        value={currentNote}
        onChange={handleChange}
        placeholder="Write note for this range..."
        rows={10}
        style={{ width: "100%" }}
        disabled={!key}
      />
    </div>
  );
};

export default Notes;