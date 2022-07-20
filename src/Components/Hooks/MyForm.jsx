import React, { Fragment, useRef } from "react";

const MyForm = () => {
  const refName = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputName = refName.current.value;

    let data = {
      name: inputName,
    };
    
    (inputName === "") ? console.log('No input') : console.log(data);

    
  };
  return (
    <Fragment>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          ref={refName}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default MyForm;
