import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth-slice";

const Header = () => {
  const loginCondition = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authAction.logout());
    console.log(loginCondition);
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {loginCondition && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
