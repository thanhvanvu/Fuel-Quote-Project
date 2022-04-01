import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register";
import FuelQuote from "./components/FuelQuote";
import QuoteHistory from "./components/QuoteHistory";
import UserProfile from "./components/UserProfile";
import AppReducer from './reducers/AppReducer';
import { useReducer } from "react";
import AppContext from "./components/AppContext";

function App() {

  const initialState = { user: null, quotes: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <BrowserRouter>

      <AppContext.Provider value={{ state, dispatch }}>

        <div >
          <div id="top">

            <Header />

            <Routes>

              {/* Route Landing Page */}
              <Route path="/" element={<Hero />} />

              {/* Route Login */}
              <Route path="/login" element={<Login />} />

              {/* Route FuelQuote */}
              <Route path="/register" element={<Register />} />

              {/* Route FuelQuote */}
              <Route path="/fuelQuote" element={<FuelQuote />} />

              {/* Route QuoteHistory */}
              <Route path="/quoteHistory" element={<QuoteHistory />} />

              {/* Route UserProfile */}
              <Route path="/userProfile" element={<UserProfile />} />

              {/* Route others */}
              <Route path="*" element={<div className="error-route container">Page Not Found</div>} />

            </Routes>

          </div>

          <Footer />

        </div>

      </AppContext.Provider>
      
    </BrowserRouter>


  );
}

export default App;
