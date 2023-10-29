import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";
import "./App.scss";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/vite-portfolio" element={<MainPage />} />
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </MainLayout>
  );
}

export default App;
