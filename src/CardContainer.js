import React from "react";
import Card from "./Card";

const CardContainer = ({ title, content, date }) => {
  return (
    <div style={{ borderLeft: "2px solid black", width: "100%",textAlign:"center" }}>
      <Card title={title} content={content} date={date} />
    </div>
  );
};

export default CardContainer;
