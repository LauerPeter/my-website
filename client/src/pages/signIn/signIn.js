

import { useState } from "react";
import './signIn.css'

function SignIn() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const apiUrl = "/api/signin"; // URL to check
    console.log("API URL for Sign In:", apiUrl);

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 200) {
        // Redirect to user dashboard or update UI
      } else {
        const data = await response.json();
        alert(`Sign-in failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const Uname = e.target.Uname.value 
    const password = e.target.password.value;

    const apiUrl = "/api/signup"; // URL to check
    console.log("API URL for Sign Up:", apiUrl);
    
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, Uname, password }),
      });
      if (response.status === 201) {
        alert("Sign-up successful. You can now log in.");
      } else {
        const data = await response.json();
        alert(`Sign-up failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {showSignUp ? (
            <div>
              <h2>Sign Up</h2>
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" name="email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username" name="Uname" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
            </div>
          ) : (
            <div>
              <h2>Sign In</h2>
              <form onSubmit={handleSignIn}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" name="email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
              </form>
            </div>
          )}
          <button onClick={toggleSignUp} className="btn btn-secondary mt-3">
            {showSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
