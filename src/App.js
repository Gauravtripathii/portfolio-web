import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-purple-dark h-screen overflow-hidden flex border-b">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
