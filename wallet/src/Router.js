/* @flow */
import React from "react";
import { Scene, Router, Actions, Tabs } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import MainForm from "./components/main/MainForm";
import History from "./components/main/History";
import Rates from "./components/main/Rates";
import Notifications from "./components/main/Notifications";
import NavBar from "./components/other/NavBar";
import TabBar from "./components/other/TabBar";


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="loginForm"
            component={LoginForm}
            hideNavBar={true}
            initial
          />
        </Scene>

        <Scene key="home" >
          <Tabs
            key="SceneTabs"
            tabBarStyle={{ height: 0 }}
            tabBarPosition={"bottom"}
            tabBarComponent={TabBar}
            swipeEnabled={false}
          >
            <Scene
              key="mainForm"
              navBar={NavBar}
              component={MainForm}
              title="Main"
              initial
            />
            <Scene key="notifications" component={Notifications} title="Notifications" />
            <Scene key="history" component={History} title="History" />
            <Scene key="rates" component={Rates} title="Rates" />
          </Tabs>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
