import { BrowserRouter as RouterContainer } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <RouterContainer>
      <div className="bg-purple-dark h-screen overflow-hidden flex flex-col xl:flex-row">
        <Nav />
        <Home />
      </div>
    </RouterContainer>
  );
}

export default App;
