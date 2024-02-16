import Navbar from "./components/ui/navbar";
import Main from "./components/ui/main";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {

  let navigate = useNavigate()

  useEffect(() => {
    navigate('/pokedex')
  }, [])

  return (
    <div className="h-[100vh] bg-[#B1D2AC]">
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default App;
