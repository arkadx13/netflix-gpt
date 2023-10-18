import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/931cdbd8-6985-4e02-9c27-f0135c47d62a/PH-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="flex flex-col absolute my-36 mx-auto left-0 right-0 p-12 bg-black w-4/12 text-white rounded-md bg-opacity-90">
        <h1 className="text-2xl my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-md bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Adress"
          className="p-4 my-4 w-full rounded-md bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-md bg-gray-800"
        />
        <button className="p-4 my-6 w-full rounded-md bg-red-600">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
