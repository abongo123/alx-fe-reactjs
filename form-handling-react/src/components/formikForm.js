import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form submitted:", values);
        alert("Registration successful!");
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="text" name="username" placeholder="Your Username" />
            <ErrorMessage name="username" component="div"/>
          </div>

          <div>
            <Field type="email" name="email" placeholder="Input Email" />
            <ErrorMessage name="email" component="div"/>
          </div>

          <div>
            <Field type="password" name="password" placeholder="Your Password" />
            <ErrorMessage name="password" component="div"/>
          </div>

          <button type="submit" disabled={isSubmitting}>Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
