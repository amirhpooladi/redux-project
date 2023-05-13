import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const loginCondition = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      {loginCondition ? (
        <div>
          <Header /> <UserProfile /> <Counter />{" "}
        </div>
      ) : (
        <Auth />
      )}
    </Fragment>
  );
}

export default App;
