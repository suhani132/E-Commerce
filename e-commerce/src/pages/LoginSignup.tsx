import { useState } from "react";

interface FormData {
  username: string;
  password: string;
  email: string;
}

const LoginSignup = () => {
  const [state, setState] = useState<string>("Login");

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function executed", formData);
    let responseData: any;
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      responseData = data;
    } catch (error) {
      console.error(error);
    }
    if (responseData && responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else  {
      alert(responseData.errors);
    }
  };

  const Signup = async () => {
    console.log("Signup Function executed", formData);
    let responseData: any;
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      responseData = data;
    } catch (error) {
      console.error(error);
    }
    if (responseData && responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else  {
      alert(responseData.errors);
    }
  };

  return (
    <div className="container mx-auto items-center justify-center flex  bg-pink-100 p-10">
      <div className=" bg-white w-fit p-10 ">
        <h1 className="flex font-semibold text-2xl mb-5 ">{state}</h1>
        <div className="flex flex-col gap-5">
          {state === "Sign Up"? (
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              className="border-2 border-gray-900 rounded-xl p-2"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="border-2 border-gray-900 rounded-xl p-2"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="border-2 border-gray-900 rounded-xl p-2"
          />
          <button
            onClick={() => {
              state === "Login"? login() : Signup();
            }}
            className="border-2 rounded-xl bg-red-500 text-white text-lg p-2"
          >
            Continue
          </button>
          {state === "Sign Up"? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setState("Login");
                }}
                className="text-red-600 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create an account?{" "}
              <span
                onClick={() => {
                  setState("Sign Up");
                }}
                className="text-red-600 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;