import earth from "../assets/earth.svg";
import heart from "../assets/heart.svg";
import account from "../assets/account.svg";
import menu from "../assets/menu.svg";
import { EarIcon } from "./EarIcon";
import "../style/NavBar.css";

export const NavBar = ({ handleAccessMenu, isAccess }) => {
  return (
    <nav className="nav-bar">
      <h1 className="web-logo">Skyvänner</h1>
      <ul className="user-menu">
        <li
          className={isAccess ? `acc-menu-btn-active` : `acc-menu-btn`}
          onClick={handleAccessMenu}
        >
          <div className="icon-container">
            <EarIcon
              isAccess={isAccess}
              className={isAccess ? `acc-menu-icon-active` : `acc-menu-icon`}
            />
          </div>
        </li>
        <li className="language menu-icon">
          <img src={earth} alt="Language Selector" />
        </li>
        <li className="saved-trip menu-icon">
          <img src={heart} alt="Saved Trip" />
        </li>
        <li className="account menu-icon">
          <img src={account} alt="Account" />
        </li>
        <li className="log-in">Log in</li>
        <li className="menu menu-icon">
          <img src={menu} alt="Account" />
        </li>
      </ul>
    </nav>
  );
};
