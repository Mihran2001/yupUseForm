import React from "react";
import "./App.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().integer().positive().required(),
  password: yup.string().min(3).max(10).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data: any) => {
    console.log(data);
  };

  const inputEvents = register("firstName");

  console.log(inputEvents);
  return (
    <div className="main">
      <div className="Form">
        <div className="title"> Sign Up </div>
        <div className="inputs">
          <form className="form-inputes" onSubmit={handleSubmit(submitHandler)}>
            <input
              type="text"
              id="firstName"
              placeholder="firstName"
              {...register("firstName")}
            />
            <p>{errors.firstName?.message}</p>
            <input
              type="text"
              id="lastName"
              placeholder="lastName"
              {...register("lastName")}
            />
            <p>{errors.lastName?.message}</p>
            <input
              type="text"
              id="email"
              placeholder="email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <input
              type="text"
              id="age"
              placeholder="age"
              {...register("age")}
            />
            <p>{errors.age?.message}</p>
            <input
              type="password"
              id="password"
              placeholder="password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
            <input
              type="password"
              id="confirmPassword"
              placeholder="confirmPassword"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
