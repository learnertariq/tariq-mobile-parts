import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import googleLogo from "../assets/auth/google.png";
import auth from "../utils/firebase.init";
import userService from "../service/userService";
import Loading from "../components/Shared/Loading";
import Alert from "../components/Shared/Alert";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  ///////////////// Firebase methods
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
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
    // return console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    // update display name
    await updateProfile({ displayName: data.name });

    // clear the form
    e.target.reset();
  };

  if (loading || loadingGoogle) {
    return <Loading />;
  }

  return (
    <section className="max-w-sm mx-auto mb-12">
      <h2 className="text-4xl mb-8 font-bold text-center">Register</h2>
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
          type="name"
          {...register("name", { required: true })}
          placeholder="Name"
          className="input input-bordered input-primary w-full w-full mb-3"
        />
        <br />
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
          <Alert>{error?.message || errorGoogle?.message}</Alert>
        )}
        <br />

        <button type="submit" className="btn btn-primary tracking-widest">
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
