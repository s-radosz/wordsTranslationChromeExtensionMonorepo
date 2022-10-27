import { Component } from 'react'
import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './History'
import Alert from './utils/Alert/Alert'
import Menu from './utils/Menu/Menu'
import Footer from './utils/Footer/Footer'
import Home from './Home/Home'
import Register from './Register/Register'
import Dashboard from './Dashboard/Dashboard'
import Settings from './Settings/Settings'
import Login from './Login/Login'
import { MainProps, MainState } from './Main.interface'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './../store/store'
import LoginCheckMiddleware from './helpers/LoginCheckMiddleware'

//@ts-ignore
const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

class Main extends Component<MainProps, MainState> {
  history: any
  routes: any

  constructor(props) {
    super(props)

    this.state = {
      showLoader: false,
      alertMessage: '',
      alertStatus: '',
      allowedPaths: ['panel', 'login', 'register'],
      allowRedirect: false,
      redirectedPath: '',
    }

    this.history = history

    this.routes = [
      {
        path: '/register',
        name: 'Register',
        Component: Register,
        public: true,
      },
      {
        path: '/login',
        name: 'Login',
        Component: Login,
        public: true,
      },
      {
        path: '/panel',
        name: 'Dashboard',
        Component: Dashboard,
        public: false,
      },
      {
        path: '/settings',
        name: 'Settings',
        Component: Settings,
        public: false,
      },
      {
        path: '/',
        name: 'Home',
        Component: Home,
        public: true,
      },
    ]
  }

  componentDidMount(): void {
    if (window.location.pathname.split('/').pop()) {
      this.handleChangePath(window.location.pathname.split('/').pop())
    }
  }

  checkAllowedPath = (path: string) => {
    const allowedPaths = this?.state?.allowedPaths

    if (allowedPaths?.includes(path?.split('/')[1])) {
      return <Redirect to={path} />
    } else {
      return <Redirect to='/' />
    }
  }

  handleChangePath = (path: string) => {
    const { allowedPaths } = this.state
    const user = localStorage?.getItem('user')
    const pathData = this.routes?.find((foundPath) => foundPath.path === `/${path}`)

    if (!pathData?.public && user) {
      this.setState({ allowRedirect: true, redirectedPath: path })
    } else if (pathData?.public && pathData?.path) {
      this.setState({ allowRedirect: true, redirectedPath: path })
    } else {
      this.setState({ allowRedirect: true, redirectedPath: '/' })
    }
  }

  handleShowAlert = (message: string, status: string) => {
    //console.log(["handleShowAlert", message])

    this.setState({ alertMessage: message, alertStatus: status })

    setTimeout(() => {
      this.setState({ alertMessage: '', alertStatus: '' })
    }, 4000)
  }

  handleShowLoader = (status: boolean) => {
    this.setState({ showLoader: status })
  }

  getUrlPathname = () => {
    return window.location.pathname
  }

  render() {
    const { showLoader, alertMessage, alertStatus, allowRedirect, redirectedPath } = this.state

    return (
      <ReduxProvider store={reduxStore}>
        {alertMessage && alertStatus && <Alert message={alertMessage} status={alertStatus} />}

        <Router history={history}>
          <LoginCheckMiddleware />

          <Menu handleChangePath={this.handleChangePath} />

          <div className='container'>
            {allowRedirect && redirectedPath && <Redirect to={redirectedPath} />}

            <Switch>
              {this?.routes?.map(({ path, name, Component }) => {
                return (
                  <Route exact key={`path-${name}`} path={path}>
                    <Component
                      handleChangePath={this.handleChangePath}
                      handleShowAlert={this.handleShowAlert}
                    />
                  </Route>
                )
              })}
            </Switch>
          </div>
          <Footer />
        </Router>
      </ReduxProvider>
    )
  }
}

export default Main
