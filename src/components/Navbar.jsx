import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Navbar({ search, setSearch }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  let user = localStorage.getItem("user")
  let cart = user ? JSON.parse(localStorage.getItem("cart")) || [] : []
  let total = 0
  cart.forEach(item => total += item.qty || 1)

  function logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("cart")
    navigate("/")
    window.location.reload()
  }

  return (
    <>
      <nav className="navbar-custom">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            <img src="/src/assets/images/logo2.png" alt="Amazon" />
          </Link>
        </div>

        <div className="navbar-center">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="navbar-right">
          <div className="account">
            <small>{user ? `Hello, ${user}` : "Hello, Sign in"}</small>
            <Link to="/login" className="link">Account</Link>
          </div>

          <div className="orders">
            <small>Returns</small>
            <div className="bold">& Orders</div>
          </div>

          <Link to="/cart" className="link">🛒 Cart ({total})</Link>

          {user && (
            <button onClick={logout} className="logout-btn">Logout</button>
          )}

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <span>All</span>
        <span>Fresh</span>
        <span>Deals</span>
        <span>Mobiles</span>
        <span>Customer Service</span>
        <span>Electronics</span>
        <span>Fashion</span>
      </div>
    </>
  )
}

export default Navbar
