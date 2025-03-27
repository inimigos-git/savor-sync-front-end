"use client";
import { Routes } from "react-router-dom";
import { Header } from "./components/header/header";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        {/* <Sidebar /> */}
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/Restaurantes" element={<Restaurants />} /> */}
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
