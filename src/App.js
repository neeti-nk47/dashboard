import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import AddNew from "./pages/AddNew";
import Attendence from "./pages/Attendence";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  let date = new Date().toJSON().slice(0, 10);
  let path = `/attendence${date}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); //timer splash screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/addNewMember" element={<AddNew />} />
          </Route>
          <Route path={path} element={<Attendence />} />
        </Routes>
      )}
    </>
  );
}

export default App;
