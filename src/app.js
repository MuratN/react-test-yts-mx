import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Index } from "./pages/index/index";
import { HiddenMovies } from './pages/hidden-movies/hidden-movies';
import "./styles/styles.css";

export const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/hidden-movies" exact component={HiddenMovies} />
        </Switch>
    </Router>
);
