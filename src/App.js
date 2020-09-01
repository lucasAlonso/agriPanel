import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListExpte from "./components/CRUD/listExpte";
import EditExpte from "./components/CRUD/editExpte";
import CreateExpte from "./components/CRUD/createExpte";
import DeleteExpte from "./components/CRUD/deleteExpte";

const App = () => {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">
                        AGRIPANEL
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">
                                    List Exptes
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">
                                    Create Expte
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br />
                <Route path="/" exact component={ListExpte} />
                <Route path="/edit/:id" component={EditExpte} />
                <Route path="/create" component={CreateExpte} />
                <Route path="/delete/:id" component={DeleteExpte} />
            </div>
        </Router>
    );
};

export default App;
