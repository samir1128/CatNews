





import { NavLink } from "react-router-dom";


 const NavBar = ()=>{
  
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg bg-primary ">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-light" to="">
              CatNews
            </NavLink> 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item"><NavLink       className={({ isActive }) => 
        isActive 
              ? "nav-link --bs-secondary-color fw-bold" // grey text + bold
          : "nav-link text-light"
      } to="/">Home</NavLink> </li> */}
        <li className="nav-item"><NavLink       className={({ isActive }) => 
        isActive 
              ? "nav-link --bs-secondary-color fw-bold" // grey text + bold
          : "nav-link text-light"
      } to="/general">General</NavLink> </li>
                <li className="nav-item"><NavLink       className={({ isActive }) => 
        isActive 
              ? "nav-link --bs-secondary-color fw-bold" // grey text + bold
          : "nav-link text-light"
      } to="/business">Business</NavLink> </li>
                <li className="nav-item"><NavLink       className={({ isActive }) => 
        isActive 
          ? "nav-link --bs-secondary-color fw-bold" // grey text + bold
          : "nav-link text-light"
      } to="/entertainment">Entertainment</NavLink> </li>
              
                <li className="nav-item"><NavLink       className={({ isActive }) => 
        isActive 
              ? "nav-link --bs-secondary-color fw-bold" // grey text + bold
          : "nav-link text-light"
      } to="/health">Health</NavLink> </li>
                <li className="nav-item"><NavLink       className={({ isActive }) => 
        isActive 
              ? "nav-link --bs-secondary-color fw-bold" // grey text + bold
          : "nav-link text-light"
      } to="/science">Science</NavLink> </li>
                <li className="nav-item"><NavLink       className={({ isActive }) => 
        isActive 
              ? "nav-link --bs-secondary-color fw-bold" // grey text + bold
          : "nav-link text-light"
      } to="/sports">Sports</NavLink> </li>
                <li className="nav-item"><NavLink       className={({ isActive }) => 
        isActive 
              ? "nav-link --bs-secondary-color fw-bold" // grey text + bold
          : "nav-link text-light"
      } to="/technology">Technology</NavLink> </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

export default NavBar
// home aria-current="page" 
