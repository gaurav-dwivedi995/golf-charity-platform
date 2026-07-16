import {useState} from "react";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   function handleSubmit(e){
    e.preventDefault();

    console.log(email);
    console.log(password);
   }

   return(
    <div className="login-container">

        <form className="login-form" onSubmit={handleSubmit}>
            
            <h2>Login</h2> 
          <input 
          type="email" 
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />


          <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
            
            <button type="submit">
                Login
            </button>
 
           </form>
            </div>

   )

}

export default Login;