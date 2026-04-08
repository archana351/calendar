import React, { useState, useEffect, useRef } from "react";
import Calendar from "./components/Calendar";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [notesMap, setNotesMap] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const isFirstLoad = useRef(true);
  // Load from localStorage
  useEffect(() => {
  const saved = localStorage.getItem("calendarData");

  if (saved) {
    const parsed = JSON.parse(saved);

    setStartDate(parsed.startDate ? Number(parsed.startDate) : null);
    setEndDate(parsed.endDate ? Number(parsed.endDate) : null);
    setNotesMap(parsed.notesMap || {});
  }
}, []);

  // Save to localStorage
  useEffect(() => {
  if (isFirstLoad.current) {
    isFirstLoad.current = false;
    return;
  }

  const data = {
    startDate,
    endDate,
    notesMap,
  };

  localStorage.setItem("calendarData", JSON.stringify(data));
}, [startDate, endDate, notesMap]);
  return (
  <div className={`app ${darkMode ? "dark" : ""}`}>
    <div className="container">
 {/* Dark Mode Button */}
    <div style={{ textAlign: "right", marginBottom: "10px" }}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </div>

      {/* Top Image */}
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="hero"
        />
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">

        {/* Notes Left */}
        <div className="notes-section">
          <Notes
            startDate={startDate}
            endDate={endDate}
            notesMap={notesMap}
            setNotesMap={setNotesMap}
          />
        </div>

        {/* Calendar Right */}
        <div className="calendar-section">
          <Calendar
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>

      </div>
    </div>
  </div>
);
}

export default App;