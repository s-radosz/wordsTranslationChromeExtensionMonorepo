import * as React from "react";
import axios from "axios";
import ACTIONS from "../../modules/actions/userActions";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = ({
    handleShowAlert,
    user,
    config,
    createUser,
    handleChangePath
}) => {
    const [levelList, setLevelList] = React.useState([]);
    const [selectedLevelId, setSelectedLevelId] = React.useState(null);

    const handleSubmit = (email, password, name) => {
        if (email && password && name) {
            axios
                .post(
                    `${config &&
                        config.paths &&
                        config.paths.API_URL &&
                        config.paths.API_URL}/register`,
                    {
                        email: email,
                        password: password,
                        name: name,
                        user_level_id: selectedLevelId
                    }
                )
                .then(res => {
                    createUser(res.data.result);
                    handleShowAlert(
                        `Poprawnie utworzono nowego użytkownika`,
                        "success"
                    );
                    handleChangePath("panel");
                })
                .catch(err => {
                    handleShowAlert(
                        `Wystąpił błąd przy rejestracji - użytkownik z podanym adresem już istnieje`,
                        "danger"
                    );
                });
        } else {
            handleShowAlert(`Wszystkie pola są wymagane`, "danger");
        }
    };

    const getUserLevels = () => {
        axios
            .get(`${process.env.MIX_APP_URL}/api/user-levels/all`)
            .then(res => {
                setLevelList(res.data.result);
            });
    };

    React.useEffect(() => {
        getUserLevels();
    }, []);

    return (
        <div className="container__one-page--center">
            <Formik
                initialValues={{
                    email: "",
                    name: "",
                    password: "",
                    setSelectedLevelId: ""
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email("Email jest nieprawidłowy")
                        .required("Email jest wymagany"),
                    name: Yup.string().required("Imię jest wymagane"),
                    password: Yup.string().required("Hasło jest wymagane")
                })}
                onSubmit={(fields: {
                    name: string;
                    email: string;
                    password: string;
                    setSelectedLevelId: string;
                }) => {
                    handleSubmit(fields.email, fields.password, fields.name);
                }}
                render={({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <Field
                                name="name"
                                placeholder="Imię"
                                type="text"
                                className={
                                    "form-control" +
                                    (errors.name && touched.name
                                        ? " is-invalid"
                                        : "")
                                }
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="email"
                                placeholder="Email"
                                type="email"
                                className={
                                    "form-control" +
                                    (errors.email && touched.email
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
                                    (errors.password && touched.password
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
                        <label>Jak oceniasz swój poziom angielskiego?</label>
                        <select
                            onChange={e => setSelectedLevelId(e.target.value)}
                        >
                            {levelList.map((level, i) => {
                                return (
                                    <option value={level.id} key={level.id}>
                                        {level.level}
                                    </option>
                                );
                            })}
                        </select>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn red-btn box-shadow"
                            >
                                Zarejestruj
                            </button>
                        </div>
                    </Form>
                )}
            />
        </div>
    );
};
const mapStateToProps = state => ({
    user: state.user,
    config: state.config
});

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(ACTIONS.createUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
