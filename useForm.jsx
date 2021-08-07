import { useState } from "react";
import "./styles.css";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleFunc = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  return [values, handleFunc];
};

// ********************************************* //

export default function App() {
  const [value, handleChange] = useForm({
    name: "",
    email: ""
  });
  return (
    <div className="App">
      <h1>useForm</h1>
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleChange}
        placeHolder="name"
      ></input>{" "}
      <input
        type="text"
        name="surname"
        value={value.surname}
        onChange={handleChange}
        placeHolder="surname"
      ></input>
      <div
        style={{
          display: "flex",
          gap: "1em",
          justifyContent: "center"
        }}
      >
        <h3>{value.name.toUpperCase()}</h3>
        <h3>{value.surname}</h3>
      </div>
    </div>
  );
}
