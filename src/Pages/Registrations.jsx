import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'; 

const Registration = () => {
  const { createUser, setUser, signInwithGoogle } = useContext(AuthContext); 

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must include uppercase, lowercase, and be at least 6 characters long!");
      return;
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        toast.success("Registration successful!");
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGoogleRegister = () => {
    signInwithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Google Registration successful!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className='flex justify-center mt-8 items-center'>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className='font-bold text-2xl text-center bg-gradient-to-r from-pink-300 via-yellow-300 to-cyan-300 bg-clip-text text-transparent'>
          Register Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">

              <label className="label font-bold">Name</label>
              <input name='name' type="text" className="input" placeholder="Enter your name" required />

              <label className="label font-bold">Photo URL</label>
              <input name='photo' type="text" className="input" placeholder="Photo URL" required />

              <label className="label font-bold">Email</label>
              <input name='email' type="email" className="input" placeholder="Enter your email" required />

              <label className="label font-bold">Password</label>
              <input name='password' type="password" className="input" placeholder="Enter your password" required />

              <label className="label font-bold">Confirm Password</label>
              <input name='confirmPassword' type="password" className="input" placeholder="Confirm your password" required />

              <button
                type='submit'
                className="btn text-white mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-500 transition hover:scale-100 hover:shadow-[0_0_10px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-85"
              >
                Register
              </button>
            </fieldset>
          </form>


          <p className='flex items-center text-center justify-center my-2'>or</p>

          <button
            onClick={handleGoogleRegister}
            className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full flex items-center justify-center gap-2 px-4 py-2 rounded-r-md font-semibold transition hover:scale-100 hover:shadow-[0_0_10px_rgba(159,98,242,0.6)] hover:from-[#7b3ff2] hover:to-[#b17cff] active:scale-85'
          >
            <FcGoogle size={22} /> Continue With Google
          </button>

          <p className='font-semibold text-center pt-5'>
            Already have an account?{" "}
            <Link className='text-red-500' to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
