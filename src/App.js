import "./App.css";
import Header from "./components/header/Header";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Experience from "./components/section/Experience";
import Footer from "./components/section/Footer";
import Home from "./components/section/Home";
import Portfolio from "./components/section/Portfolio";
import Service from "./components/section/Service";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Service />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Login /> */}
    </div>
  );
}

export default App;
