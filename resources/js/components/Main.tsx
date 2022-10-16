import { Component } from "react";
import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import history from "./History";
import Alert from "./utils/Alert/Alert";
import Menu from "./utils/Menu/Menu";
import Footer from "./utils/Footer/Footer";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Dashboard from "./Dashboard/Dashboard"
import Login from "./Login/Login";
import { MainProps, MainState } from "./Main.interface";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./../modules/store";
import LoginCheckMiddleware from "./helpers/LoginCheckMiddleware"

//@ts-ignore
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class Main extends Component<MainProps, MainState> {
    history: any;
    routes: any;

    constructor(props) {
        super(props);

        this.state = {
            showLoader: false,
            alertMessage: "",
            alertStatus: "",
            allowedPaths: ["panel"],
            allowRedirect: false,
            redirectedPath: ""
        };

        this.history = history;

        this.routes = [
            {
                path: "/rejestracja",
                name: "Register",
                Component: Register
            },
            {
                path: "/logowanie",
                name: "Login",
                Component: Login
            },
            {
                path: "/panel",
                name: "Dashboard",
                Component: Dashboard
            },
            {
                path: "/",
                name: "Home",
                Component: Home
            }
        ];
    }

    checkAllowedPath = (path: string) => {
        const allowedPaths = this.state.allowedPaths;

        if (allowedPaths.includes(path.split("/")[1])) {
            //console.log(["path", path, path.split("/")[1]]);
            return <Redirect to={path} />;
        } else {
            return <Redirect to="/" />;
        }
    };

    handleChangePath = (path: string) => {
        const { allowedPaths } = this.state;

        if (allowedPaths.includes(path.split("/")[0])) {
            this.setState({ allowRedirect: true, redirectedPath: path });
        } else {
            this.setState({ allowRedirect: true, redirectedPath: "/" });
        }
    };

    handleShowAlert = (message: string, status: string) => {
        //console.log(["handleShowAlert", message])

        this.setState({ alertMessage: message, alertStatus: status });

        setTimeout(() => {
            this.setState({ alertMessage: "", alertStatus: "" });
        }, 4000);
    };

    handleShowLoader = (status: boolean) => {
        this.setState({ showLoader: status });
    };

    getUrlPathname = () => {
        return window.location.pathname;
    };

    render() {
        const {
            showLoader,
            alertMessage,
            alertStatus,
            allowRedirect,
            redirectedPath,
        } = this.state;

        return (
            <ReduxProvider store={reduxStore}>
                {alertMessage && alertStatus && (
                    <Alert message={alertMessage} status={alertStatus} />
                )}

                <Router history={history}>
                    <LoginCheckMiddleware />

                    <Menu handleChangePath={this.handleChangePath} />

                    <div className="container">
                        {allowRedirect && redirectedPath && (
                            <Redirect to={redirectedPath} />
                        )}

                        <Switch>
                            {this.routes.map(
                                ({ path, name, Component }) => {
                                    return (
                                        <Route
                                            exact
                                            key={`path-${name}`}
                                            path={path}
                                        >
                                            <Component
                                                handleChangePath={this.handleChangePath}
                                                handleShowAlert={this.handleShowAlert}
                                            />
                                        </Route>
                                    );
                                }
                            )}
                        </Switch>
                    </div>
                    <Footer />
                </Router>
            </ReduxProvider>
        );
    }
}

export default Main;

