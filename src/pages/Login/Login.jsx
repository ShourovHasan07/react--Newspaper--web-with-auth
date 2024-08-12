import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(Authcontext);

  const handelLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(form.get("email"));
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-2xl text-center"> Please Login </h2>

        <div>
          <form
            onSubmit={handelLogin}
            className="card-body md:w-3/4 lg:w-1/2 mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className=" text-center mt-2 ">
            Dont’t Have An Account ?{" "}
            <Link className="text-blue-400 font-b" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
