import * as React from "react";
import userActions from "../../modules/actions/userActions";
import wordsActions from "../../modules/actions/wordsActions"
import { connect } from "react-redux";
import LoginForm from "./LoginForm/LoginForm"
import { handlePostRequest, handleGetRequest } from "./../helpers/api"


const Login = ({ handleShowAlert, config, createUser, createWords, handleChangePath }) => {
    const handleSubmit = async (email, password) => {
        if (email && password) {
            await handlePostRequest(`${config && config.paths && config.paths.API_URL && config.paths.API_URL}/login`, {
                email: email,
                password: password
            }).then(async (res: {
                token: string,
                user: {
                    id: number,
                    name: string
                }
            }) => {
                if (!res.user) {
                    console.log(res)
                    return handleShowAlert("Nieprawidłowe dane", "danger")
                }
                createUser(res);

                localStorage.setItem("token", res.token);

                localStorage.setItem("user", JSON.stringify(res.user));

                handleShowAlert(`Witaj, ${res.user && res.user.name ? res.user.name : ""}`, "success")

                let wordsResult = await handleGetRequest(`${config.paths.API_URL}/words/all/${res.user.id}`, res.token)

                createWords(wordsResult)

                handleChangePath("panel")
            })
        } else {
            handleShowAlert(`Wszystkie pola są wymagane`, "danger")
        }
    }

    return (
        <div className="container__one-page--center">
            <LoginForm
                handleSubmit={handleSubmit}
            />
        </div>

    )
}
const mapStateToProps = state => ({
    config: state.config
});

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(userActions.createUser(user)),
    createWords: wordsData => dispatch(wordsActions.createWords(wordsData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);