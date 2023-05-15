import React from "react"

const DisplayError = ({ error }) => {
  return (
    <div className="p-5">
      <h3 className="text-danger">{error}</h3>
    </div>
  );
};

export default DisplayError
