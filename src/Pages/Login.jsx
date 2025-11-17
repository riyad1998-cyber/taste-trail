import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
  const { signIn, signInwithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"; 

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error("Email or Password Incorrect");
      });
  };

  const handleGoogleLogin = () => {
    signInwithGoogle()
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        toast.error("Google login failed. Try again.");
      });
  };

  return (
    <div className='flex justify-center mt-8 items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-bold text-2xl text-center bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent'>
          Login Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label font-bold">Email</label>
              <input
                name='email'
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label font-bold">Password</label>
              <input
                name='password'
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <button
                type='submit'
                className="btn text-white mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-500 transition hover:scale-100 hover:shadow-[0_0_10px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-85"
              >
                Login
              </button>
            </fieldset>
          </form>

          <p className='flex items-center text-center justify-center my-2'>or</p>

          <button
            onClick={handleGoogleLogin}
            className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full flex items-center justify-center gap-2 px-4 py-2 rounded-r-md font-semibold transition hover:scale-100 hover:shadow-[0_0_10px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-85'
          >
            <FcGoogle size={22} /> Continue With Google
          </button>

          <p className='font-semibold text-center pt-5'>
            Don't have an account?{" "}
            <Link className='text-red-500' to="/auth/registration">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
