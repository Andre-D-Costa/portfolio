import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/homepage/index.jsx";
import Layout from "./components/layout";
import AboutMe from "./pages/about/index.jsx";
import Technologies from "./pages/technologies/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/technologies" element={<Technologies />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
