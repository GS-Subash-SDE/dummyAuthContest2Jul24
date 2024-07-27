import { useState } from "react";
import "./App.css";
import {getData} from "./components/auth";
import UserProfile from "./components/UserProfile";


function App() {

  // States of Login input fields
  const [userMail, setUserMail] = useState('');
  const [userPw, setUserPw] = useState('');
  const[loginStatus, setLoginStatus] = useState('init');
  
  
  
  // Login btn eventy handling
  const submitLogin = async () => {
    localStorage.clear();
    setLoginStatus('pending');
    const result = await getData(userMail, userPw);
    console.log('Result ',result);
    setLoginStatus(result.status);
  }
  if (loginStatus === 'success') {
    console.log(loginStatus);
    return <UserProfile  />;
  }

  return (
    <div className="App">
      <main>
        <div className="login-heading">
          <p className="welcome-text">Welcome back! 👋</p>
          <p className="sigin-text">Sign in to your account</p>
        </div>
        <div className="login-body">
          <div className="input-cont">
            <label htmlFor="mymail">Your email</label>
            <input
              value={userMail}
              onChange={(e) => setUserMail(e.target.value)}
              type="email"
              name="mymail"
              id="mymail"
            />
          </div>
          <div className="input-cont">
            <label htmlFor="mypw">Password</label>
            <input
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
              type="password"
              name="mypw"
              id="mypw"
            />
          </div>
          <button onClick={submitLogin} type="button" className="login-btn">
            CONTINUE
          </button>
        </div>
        <div className="login-footer">
          <a href="#">Forget your password?</a>
        </div>
      </main>
      <div className="signup-cont">
        <p className="sign-up">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
