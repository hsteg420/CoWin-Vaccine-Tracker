import { BrowserRouter, Switch, Route } from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import District from "./Pages/District";
import Home from "./components/Home";
import Pincode from "./Pages/Pincode";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pincode" component={Pincode} />
        <Route path="/district" component={District} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
