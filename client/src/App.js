import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Upload from "./components/Upload";
import UploadMultipleFiles from "./components/UploadMultiple";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/upload" element={<Upload />} />
        <Route path="/upload-multiple" element={<UploadMultipleFiles />} />
      </Route>
    </Routes>
  );
}

export default App;
