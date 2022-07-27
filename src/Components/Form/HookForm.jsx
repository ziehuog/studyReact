import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName"> First Name</label> <br />
        <input {...register("name.firstName")} placeholder="First Name" />
      </div>
      <br />
      <div>
        <label htmlFor="lastName"> Last Name</label> <br />
        <input {...register("name.lastName")} placeholder="Last Name" />
      </div>
      <br />
      <div>
        <label htmlFor="age"> Age</label> <br />
        <input {...register("age")} placeholder="Age" />
      </div>
      <br />
      <div>
        <select {...register("gender")}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </div>
      <br />

      <div>
        <input {...register("state")} type="radio" value="sleep" id="sleep" />
        <label htmlFor="sleep">Sleep</label>
      </div>
      <div>
        <input {...register("state")} type="radio" value="awake" id="awake" />
        <label htmlFor="awake">Awake</label>
      </div>
      <br />

      <table>
        <thead>
          <tr>
            <th>Activities</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Study</td>
            <td>
              <input type="checkbox" value="Mon" {...register("study")} />
            </td>
            <td>
              <input type="checkbox" value="Tue" {...register("study")} />
            </td>
            <td>
              <input type="checkbox" value="Wed" {...register("study")} />
            </td>
          </tr>
          <tr>
            <td>Watch TV</td>
            <td>
              <input type="checkbox" value="Mon" {...register("watchTV")} />
            </td>
            <td>
              <input type="checkbox" value="Tue" {...register("watchTV")} />
            </td>
            <td>
              <input type="checkbox" value="Wed" {...register("watchTV")} />
            </td>
          </tr>
        </tbody>
      </table>

      <input type="submit" style={{ margin: "30px 70px" }} />
    </form>
  );
};

export default HookForm;
