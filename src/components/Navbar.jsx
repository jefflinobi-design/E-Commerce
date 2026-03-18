import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../features/auth/authSlice";
import { clearCart } from "../features/cart/cartSlice";

const Navbar = ({ setSearch }) => {

  const cart = useSelector(state => state.cart.items);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🔥 LOGOUT FUNCTION
  const handleLogout = () => {
  dispatch(clearCart());
  dispatch(logout());

  // 🔥 FORCE RESET (VERY IMPORTANT)
  window.location.reload();

  navigate("/");
};

  return (
    <div className="navbar">

      {/* LOGO */}
      <h2>Amazon Clone</h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      {/* NAV LINKS */}
      <div className="navLinks">

        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="logoutBtn">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}

      </div>

    </div>
  );
};

export default Navbar;