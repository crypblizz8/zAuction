import { Header } from "./components/Header";
import { Container } from "./styles/globals";
import { ZoraProvider } from "./utils/ZoraProvider";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Mint from "./components/Mint";
import Media from "./views/Media";

function App() {
  return (
    <ZoraProvider>
      <Router>
        <Header />
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mint">
            <Mint />
          </Route>
          <Route path="/media/:id">
            <Media />
          </Route>
        </Container>
      </Router>
    </ZoraProvider>
  );
}

export default App;
