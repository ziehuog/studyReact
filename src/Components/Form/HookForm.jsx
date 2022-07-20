import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <Fragment>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name.firstName")} required placeholder="First name" />
        <input {...register("name.lastName")} required placeholder="Last name" />
        <input {...register("phoneNum", 
                  {
                    required: true,
                    max: 10,
                    min: 7
                  })} 
                placeholder="Phone Number" />
        <select >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Form;
