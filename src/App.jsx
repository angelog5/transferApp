import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Car from "./components/Car";
import { useState } from "react";
import AppContent from "./components/AppContent";

function App() {
  const [page, setPage] = useState("splash");

  return (
    <main>
      {page === "splash" ? (
        <Splash setPage={setPage} />
      ) : (
        <AppContent page={page} setPage={setPage} />
      )}
    </main>
  );
}

export default App;
