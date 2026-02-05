import { BrowserRouter as Router,Routes, Route,  } from "react-router-dom";
import "./App.css";
import Popular from "./components/popular";
import Footer from "./components/Footer";
import Journel from "./components/Journel";
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div style={{ backgroundColor: "#14181c", minHeight: "100vh" }}>
      <style>{`
        /* Hide scrollbars for mobile horizontal scrolling */
        .d-flex.overflow-auto::-webkit-scrollbar {
          display: none;
        }
        .d-flex.overflow-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Mobile button styles */
        @media (max-width: 991px) {
          .btn-outline-light {
            background-color: transparent;
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: #c6dcf1;
            padding: 0.4rem 1rem;
            font-size: 0.75rem;
            border-radius: 3px;
          }
          .btn-outline-light:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
      />

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/Journel" element={<Journel />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;