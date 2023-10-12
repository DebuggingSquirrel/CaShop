import { RecoilRoot } from "recoil";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { EmojiProvider } from "./hooks/Emoji/EmojiContext";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        {/* <EmojiProvider>
          <Switch> */}
        <Router />
        {/* </Switch>
        </EmojiProvider> */}
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
