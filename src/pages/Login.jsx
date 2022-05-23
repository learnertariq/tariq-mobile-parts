import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import googleLogo from "../assets/auth/google.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  //
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

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const newUserState = { ...userState };
    newUserState[name] = value;
    setUserState(newUserState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // sign in user
    await signInWithEmailAndPassword(userState.email, userState.password);

    // clear the form
    e.target.reset();
  };

  if (loading || loadingGoogle) {
    return (
      <div className="container text-center my-5">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  //
  return (
    <section className="max-w-sm mx-auto mb-12">
      <h2 className="text-4xl mb-8 font-bold text-center">Login</h2>
      <div className="social-container mb-8 text-center">
        <button className="btn btn-primary btn-outline rounded-full">
          <img src={googleLogo} alt="" />
        </button>
      </div>
      <div class="divider">OR</div>
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
        <button type="submit" className="btn btn-primary tracking-widest">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
