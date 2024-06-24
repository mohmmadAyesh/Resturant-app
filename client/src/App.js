import Login from "./component/Auth/Login/Login.jsx";
import SignUp from "./component/Auth/SignUp/SignUp.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import { AuthProvider } from "./context/AuthContext";
import Menu from "./pages/Menu/Menu.js";
import Navbar from "./component/layout/Navbar.jsx";
import Profile from "./pages/Profile/Profile.js";
import Order from "./pages/Order/Order.js";
import { OrderProvider } from "./context/OrderContext.js";
function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myOrder" element={<Order />} />
          </Routes>
        </Router>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
