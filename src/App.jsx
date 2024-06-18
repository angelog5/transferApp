import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Car from "./components/Car";
import { useState } from "react";
import AppContent from "./components/AppContent";
import { useSelector } from "react-redux";

function App() {
  const { page } = useSelector((state) => state.global);

  return <main>{page === "splash" ? <Splash /> : <AppContent />}</main>;
}

export default App;
