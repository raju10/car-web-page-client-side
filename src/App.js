import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
/////////////
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import Admain from "./Components/Admain/Admain/Admain";
import Order from "./Components/Order/Order/Order";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login/Login";
export const userOrderContext = createContext();
export const UserContext = createContext();
export const NormalContext = createContext();
////////////
function App() {
  const [loginUser, setLoginUser] = useState({});
  const [selcOrder, setSelcOrder] = useState([]);
  const [normal, setNormal] = useState([]);
  return (
    <div>
      <NormalContext.Provider value={[normal, setNormal]}>
        <UserContext.Provider value={[loginUser, setLoginUser]}>
          <userOrderContext.Provider value={[selcOrder, setSelcOrder]}>
            <Router>
              <Switch>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/admain">
                  <Admain></Admain>
                </Route>
                <PrivateRoute path="/order">
                  <Order></Order>
                </PrivateRoute>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                {/* /////////// */}
                <Route
                  render={({ location, history }) => (
                    <React.Fragment>
                      <SideNav
                        onSelect={(selected) => {
                          const to = "/" + selected;
                          if (location.pathname !== to) {
                            history.push(to);
                          }
                        }}
                      >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">
                          <NavItem eventKey="home">
                            <NavIcon>
                              <i
                                className="fa fa-fw fa-home"
                                style={{ fontSize: "1.75em" }}
                              />
                            </NavIcon>
                            <NavText>Home</NavText>
                          </NavItem>
                          {/* <NavItem eventKey="devices">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-device"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Devices</NavText>
                    </NavItem> */}
                        </SideNav.Nav>
                      </SideNav>
                      <main>
                        {/* <Route path="/" exact component={props => <RootComponent />} /> */}
                        <Route path="/home" component={(props) => <Home />} />
                        {/* <Route path="/devices" component={props => <Devices />} /> */}
                      </main>
                    </React.Fragment>
                  )}
                />
                {/* ////////// */}
              </Switch>
            </Router>
          </userOrderContext.Provider>
        </UserContext.Provider>
      </NormalContext.Provider>
    </div>
  );
}

export default App;
