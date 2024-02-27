import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../store/store";
import { saveSearch } from "../../../store/slicers/catalogSlice";
import { updateStore } from "../../../store/slicers/cartSlice";
import styles from "./header.module.css";
import headerLogo from "../../../img/header-logo.png";

export const Header: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [activeSearch, setActiveSrch] = useState(false);
  const [localCart, setLocalCart] = useState([]);
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cartState);

  useEffect(() => {
    if (localStorage.cart) {
      setLocalCart(JSON.parse(localStorage.cart));
    }
  }, [cart]);

  useEffect(() => {
    if (localStorage.cart) {
      dispatch(updateStore(JSON.parse(localStorage.cart)));
    }
  }, []);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(saveSearch(e.target.value));
    navigate("/catalog");
  };

  return (
    <header className="container header_width">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">
              <img src={headerLogo} alt="Bosa Noga" />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/catalog" className="nav-link">
                    Каталог
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    О магазине
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts" className="nav-link">
                    Контакты
                  </NavLink>
                </li>
              </ul>
              <div>
                <div className={styles.header_controls_pics}>
                  <div
                    data-id="search-expander"
                    className={`${styles.header_controls_pic} ${styles.header_controls_search}`}
                    onClick={() => setActiveSrch((prev) => !prev)}
                  ></div>
                  <div
                    className={`${styles.header_controls_pic} ${styles.header_controls_cart}`}
                    onClick={() => navigate("/cart")}
                  >
                    <div
                      className={
                        localCart.length || cart.length >= 1
                          ? styles.header_controls_cart_full
                          : "deactive"
                      }
                    >
                      {localCart.length >= 1 ? localCart.length : cart.length}
                    </div>
                    <div className={styles.header_controls_cart_menu}></div>
                  </div>
                </div>
                <form
                  data-id="search-form"
                  className={`${styles.header_controls_search_form} ${styles.form_inline} ${activeSearch ? "" : "invisible"}`}
                >
                  <input
                    className={styles.form_control}
                    placeholder="Поиск"
                    onChange={(e) => changeInput(e)}
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
