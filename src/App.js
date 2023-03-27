import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./Pages/Gallery";
import Login from "./Pages/Login";
import Posts from "./Pages/Posts";
import Profile_dash from "./Pages/Profile-dashboard";
import Todo from "./Pages/Todo";
import { useEffect, useState } from "react";
import Loader from "./Pages/Loader";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    mobile: width < 992,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route
          path="/profile"
          element={<Profile_dash mobile={responsive.mobile} />}
        ></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
