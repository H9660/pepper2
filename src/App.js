import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Mobile from "./pages/Mobile";
import FrameComponent from "./pages/FrameComponent";
import GroupComponent from "./pages/GroupComponent";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/group-20":
        title = "";
        metaDescription = "";
        break;
      case "/group-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Mobile />} />

      <Route path="/frame-1" element={<FrameComponent />} />

      <Route path="/group-20" element={<GroupComponent />} />

    </Routes>
  );
}
export default App;
