import { useState } from "react"
import { Navigate } from "react-router";

function PrivateRoute({ children }) {

  // const [isLogin, setIsLogin] = useState(false);

  const localData = JSON.parse(localStorage.getItem("user"));
  console.log(localData);


  return localData ? children : <Navigate to={"/login"} />
}

export default PrivateRoute