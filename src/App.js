import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignIn from "./pages/signin/sign-in.component";
import Register from "./components/register/register.component";
import Footer from "./components/footer/footer.component";
import NewArrivals from "./pages/new-arrivals/new-arrivals.component";
import MensPage from "./pages/mens-page/mens-page.collections";

function App() {
  return (
    <div className="App" id="top">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/mens" element={<MensPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
