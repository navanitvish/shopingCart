import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src="/src/assets/Untitled.png" alt="" height={5} />
          </div>
        </NavLink>
        <div className="flex flex-row gap-4">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
