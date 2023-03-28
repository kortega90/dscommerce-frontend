import "./styles.css";
import home from "../../assets/home.svg";
import prd from "../../assets/products.svg";
import LoggetUser from "../loggedUser";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>DSC Admin</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <NavLink 
            to='/admin/home'
            className={({isActive}) => isActive? "dsc-menu-item-active": ""}
            >
              <div className="dsc-menu-item">
                <img src={home} alt="Início" />
                <p>Início</p>
              </div>
            </NavLink>
            <NavLink 
            to='/admin/products'
            className={({isActive}) => isActive? "dsc-menu-item-active": ""}
            >
            <div className="dsc-menu-item">
              <img src={prd} alt="Cadastro de produtos" />
              <p>Produtos</p>
            </div>
            </NavLink>

          </div>
          <LoggetUser />
        </div>
      </nav>
    </header>
  );
}
