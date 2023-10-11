import { RecoilRoot } from "recoil";
import "./App.css";
import { BrowserRouter, Router } from "react-router-dom";

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
