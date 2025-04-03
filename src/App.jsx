import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/homepage/index.jsx";
import Layout from "./components/layout";
import AboutMe from "./pages/about/index.jsx";
import Technologies from "./pages/technologies/index.jsx";
import Projects from "./pages/projects/index.jsx";
import Cursor from "./components/Cursor/Cursor.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/technologies" element={<Technologies />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
