import React, { useState } from "react";
import FormContainer from "./FormContainer";
import CardContainer from "./CardContainer";
import "./App.css";

function App() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();

  const handleFormData = (title, content, date) => {
    setTitle(title);
    setContent(content);
    setDate(date);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FormContainer handleFormData={handleFormData} />
      <CardContainer title={title} content={content} date={date} />
    </div>
  );
}

export default App;
