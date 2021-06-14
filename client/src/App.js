import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={user ? Home : Register} />
        <Route path="/login" component={user ? Home : Login} />
        <Route path="/write" component={user ? Write : Register} />
        <Route path="/settings" component={user ? Settings : Register} />
        <Route path="/post/:postId" component={Single} />
      </Switch>
    </Router>
  );
}

export default App;
