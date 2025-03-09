import { Formik, Form, Field } from "formik";
import { useState } from "react";

function RegistrationForm() {
  const [errors, setErrors] = useState({});

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        let newErrors = {};

        if (!values.username) {
          newErrors.username = "Username is required";
        }
        if (!values.email) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          newErrors.email = "Invalid email format";
        }
        if (!values.password) {
          newErrors.password = "Password is required";
        } else if (values.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
        }

        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }

        console.log("Form submitted:", values);
        alert("Registration successful!");
        resetForm();
        setErrors({});
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <Field type="text" name="username" placeholder="Your Username" onChange={handleChange} />
            {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
          </div>

          <div>
            <Field type="email" name="email" placeholder="Input Email" onChange={handleChange} />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          </div>

          <div>
            <Field type="password" name="password" placeholder="Your Password" onChange={handleChange} />
            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
