import "./index.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CreatePage from "./components/createPage";
import MainPage from "./components/mainPage";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/create" component={CreatePage} />
                <Route path="/" exact component={MainPage} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
