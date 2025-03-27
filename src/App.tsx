"use client";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { Home } from "./pages/home/home";
import { Restaurants } from "./pages/restaurants/restaurants";

function App() {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Restaurantes" element={<Restaurants />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
