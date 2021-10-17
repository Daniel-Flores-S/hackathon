import Home from "pages/Home";
import Products from "pages/Products";
import SkinQuiz from "pages/SkinQuiz";
import SkinQuiz02 from "pages/SkinQuiz02";
import {Route, Switch, BrowserRouter} from "react-router-dom";


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SkinQuiz} />
                <Route path="/2" exact component={SkinQuiz02} />
                <Route path="/home" exact component={Home} />
                <Route path="/products" exact component={Products} />
            </Switch>
        </BrowserRouter>
    );
}
