import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/auth-slice";
import { useRef } from "react";

const Auth = () => {
  const dispatch = useDispatch();
 const nameInput= useRef();
 const passInput=useRef();
  const loginCondition = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();
     if(nameInput.current.value=="amir" && passInput.current.value=="1743"){
    dispatch(authAction.login());
    console.log(event);}else{
      console.log("wrong pass or name");
      
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input  type="email" id="email" ref={nameInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input  type="password" id="password"  ref={passInput} />
          </div>
          {!loginCondition && <button onClick={loginHandler}>Login</button>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
