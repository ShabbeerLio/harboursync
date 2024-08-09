import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

function App() {

  // remove inspect and copy element
  //  useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   document.addEventListener('selectstart', handleSelect);
  //   document.addEventListener('contextmenu', handleRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('selectstart', handleSelect);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                title={"HARBOURSYNC EXPIMP PRIVATE LIMITED"}
                descriptions={"HARBOURSYNC EXPIMP PRIVATE LIMITED , It is a dynamic export company committed to bridging international markets with high-quality products and services."}
              />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
