import React, { useState } from "react";
import Calendar from "react-calendar";

const FormContainer = ({ handleFormData }) => {
  const [date, setDate] = useState(new Date());
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onClickDay = () => {
    setIsClicked(true);                            //setting the boolean value to true if date is selected so that title and content field will show up only after date is selected.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormData(title, content, date.toLocaleDateString());
  };

  return (
    <div style={{ width: "100%" }}>
      <h1>Note-App</h1>
      <div
        style={{height: "250px", marginBottom: "50px" }}
      >
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={onClickDay}
        ></Calendar>
      </div>
      {isClicked ? (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            value={title}
            style={{ marginBottom: "50px" }}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            type="text"
            name="content"
            value={content}
            style={{ marginBottom: "50px" }}
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <button style={{ height: "40px", width: "100px" }} type="submit">
            Add Note !
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default FormContainer;
