"use client";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        {/* <Sidebar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
