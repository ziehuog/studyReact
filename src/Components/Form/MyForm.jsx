import React, { Fragment, useRef } from "react";
import { useState } from "react";

const MyForm = () => {
  const refName = useRef();
  const [phoneNum, setPhoneNum] = useState('1234');

  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value);
  };
  let message = "";
  isNaN(Number(phoneNum)) ? (message = "Need a number") : (message = "");

  (phoneNum?.split('').length < 6) ? (message = "More than 6") : (message = "");

  function MyIsNaN(str){
    let splitString = str.split('')
    console.log(splitString)

    splitString.map((letter) => {
      if(!(Number(letter))) {
        console.log("True")
      } else {
        console.log("False")

      }
    })
  }

// console.log(+'a')

  MyIsNaN('3')

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputName = refName.current.value;

    let data = {
      name: inputName,
      num: phoneNum,
    };

    inputName === "" ? console.log("No input") : console.log(data);
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

        <input
          type="text"
          name="phoneNum"
          placeholder="Phone number"
          value={phoneNum}
          onChange={handlePhoneNum}
        />

        <p>{message}</p>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default MyForm;
