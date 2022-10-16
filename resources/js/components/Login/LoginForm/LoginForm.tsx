import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = ({ handleSubmit }) => {
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup?.object()?.shape({
                email: Yup?.string()
                    ?.email("Email jest nieprawidłowy")
                    ?.required("Email jest wymagany"),
                password: Yup?.string()?.required("Hasło jest wymagane")
            })}
            onSubmit={(fields: { email: string; password: string }) => {
                handleSubmit(fields?.email, fields?.password);
            }}
            render={({ errors, touched }) => (
                <Form>
                    <div className="form-group">
                        <Field
                            name="email"
                            placeholder="Email"
                            type="text"
                            className={
                                "form-control" +
                                (errors?.email && touched?.email
                                    ? " is-invalid"
                                    : "")
                            }
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                        />
                    </div>
                    <div className="form-group">
                        <Field
                            name="password"
                            placeholder="Hasło"
                            type="password"
                            className={
                                "form-control" +
                                (errors?.password && touched?.password
                                    ? " is-invalid"
                                    : "")
                            }
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="invalid-feedback"
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn red-btn box-shadow"
                        >
                            Zaloguj
                        </button>
                    </div>
                </Form>
            )}
        />
    );
};
export default LoginForm;
