import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">P</div>
        <span className="brand">Pinterest</span>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Buscar ideas"
        />
      </div>

      <div className="navbar-right">
        <div className="profile">G</div>
      </div>
    </header>
  )
}

export default Navbar
