import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import googleLogo from "../assets/auth/google.png";
import auth from "../utils/firebase.init";
import userService from "../service/userService";
import Loading from "../components/Loading";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  ///////////////// Firebase methods
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  ///////////////// Firebase methods

  useEffect(() => {
    if (user || userGoogle) {
      userService.login({
        email: user?.user?.email || userGoogle?.user?.email,
      });

      navigate(location?.state?.from?.pathname || "/", {
        state: location?.state,
        replace: true,
      });
    }
  }, [user, userGoogle]);

  const onSubmit = async (data, e) => {
    // sign in user
    await signInWithEmailAndPassword(data.email, data.password);

    // clear the form
    e.target.reset();
  };

  if (loading || loadingGoogle) {
    return <Loading />;
  }

  return (
    <section className="max-w-sm mx-auto mb-12">
      <h2 className="text-4xl mb-8 font-bold text-center">Login</h2>
      <div className="social-container mb-8 text-center">
        <button
          className="btn btn-primary btn-outline rounded-full"
          onClick={() => signInWithGoogle()}
        >
          <img src={googleLogo} alt="" />
        </button>
      </div>
      <div className="divider">OR</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="input input-bordered input-primary w-full w-full mb-3"
        />
        <br />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="input input-bordered input-primary w-full w-full mb-3"
        />
        <br />
        {(error || errorGoogle) && (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error?.message || errorGoogle?.message}</span>
            </div>
          </div>
        )}
        <br />

        <button type="submit" className="btn btn-primary tracking-widest">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
