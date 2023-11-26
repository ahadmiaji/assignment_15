import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentListPage from "./pages/StudentListPage";
import SaveStudentPage from "./pages/SaveStudentPage";
import AppNavbar from "./component/common/AppNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<StudentListPage />} />
          <Route path="/save-student" element={<SaveStudentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
