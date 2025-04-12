import { useCallback, useState } from "react";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMessage: "It should be a valid email address!",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      errorMessage: "",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      "data-type": "password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "ConfirmPassword",
      label: "ConfirmPassword",
      required: true,
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      "data-type": "password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
