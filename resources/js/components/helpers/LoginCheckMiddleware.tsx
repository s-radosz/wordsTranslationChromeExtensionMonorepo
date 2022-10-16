import * as React from "react";
import ACTIONS from "../../modules/actions/userActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginCheckMiddleware = ({ user, createUser }) => {
    const [redirectToHomePage, setRedirectToHomePage] = React.useState(false);
    const [redirectToDashboard, setRedirectToDashboard] = React.useState(false);

    const handleLocalStorageUser = () => {
        if (localStorage?.getItem("token") && localStorage?.getItem("user")) {
            let token = localStorage?.getItem("token");
            let user = JSON.parse(localStorage?.getItem("user"));

            //console.log(["token", token, user])

            createUser({
                token: token,
                user: user
            });
        } else {
            setRedirectToHomePage(true);
        }
    };

    React.useEffect(() => {
        handleLocalStorageUser();
    }, []);

    return (
        <>
            {redirectToHomePage && <Redirect to="/" />}
            {redirectToDashboard && <Redirect to="/dashboard" />}
        </>
    );
};

const mapStateToProps = state => ({
    config: state.config,
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(ACTIONS.createUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginCheckMiddleware);
