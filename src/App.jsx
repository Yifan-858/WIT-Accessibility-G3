import { NavBar } from "./components/NavBar";
import { Search } from "./components/Search";
import { Accessibility } from "./components/Accessibility";

import { useState } from "react";

function App() {
  const [isAccess, setIsAccess] = useState(false);

  const handelAccessMenu = () => {
    setIsAccess(!isAccess);
  };

  return (
    <>
      <div className="top-menu">
        <NavBar handleAccessMenu={handelAccessMenu} isAccess={isAccess} />
        <Search />
        {isAccess && <Accessibility />}
      </div>
    </>
  );
}

export default App;
