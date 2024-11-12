"use client";
import { Route, Routes } from "react-router-dom";
import styles from "./styles/global.module.scss";
import { Header } from "./components/Header/Header";
import { Restaurantes } from "./pages/Restaurantes";
import { Home } from "./pages/Home";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Restaurantes" element={<Restaurantes />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
