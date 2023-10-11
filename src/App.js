import { RecoilRoot } from "recoil";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
