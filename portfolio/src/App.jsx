import { useState } from "react";
import {
  Contact,
  Intro,
  Menu,
  Portfolio,
  Testimonials,
  Topbar,
  Works,
} from "./components";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;
