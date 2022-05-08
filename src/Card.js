import React from "react";

const Card = ({ title, content, date }) => {
  return (
    <div>
      {title ? (
        <>
          <h1>{title}</h1>
          <h3>{content}</h3>
          <h5>{date}</h5>{" "}
        </>
      ) : null}
    </div>
  );
};

export default Card;
