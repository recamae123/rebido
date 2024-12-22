import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl ml-9">Reca's | Shop</h1>
        <nav>
          <ul className="flex gap-6 mr-9">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline text-blue-400" : "hover:text-blue-400"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                className={({ isActive }) =>
                  isActive ? "underline text-blue-400" : "hover:text-blue-400"
                }
              >
                PRODUCTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "underline text-blue-400" : ""
                }
              >
                ABOUT
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
