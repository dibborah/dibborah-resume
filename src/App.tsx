import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// initially commented
import NotFound from "./pages/NotFound";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/dibborah-resume" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
