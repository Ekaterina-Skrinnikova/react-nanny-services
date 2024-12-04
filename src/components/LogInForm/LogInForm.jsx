import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import css from "../LogInForm/LogInForm.module.css";
import sprite from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { login } from "../../redux/users/operations";
import { closeModalLogin } from "../../redux/modal/slice";
import { useNavigate } from "react-router-dom";

export default function LogInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(login(data));
    // console.log(data);
    reset();
    dispatch(closeModalLogin());
    navigate("/nannies");
  };

  const handleCloseLogin = () => {
    dispatch(closeModalLogin());
  };

  return (
    <div className={css.backdrop}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Log In</h2>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>
        <button className={css.btnClose} onClick={handleCloseLogin}>
          <svg className={css.iconClose}>
            <use href={`${sprite}#icon-x`}></use>
          </svg>
        </button>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.wrap}>
            <input
              className={css.input}
              {...register("email", {
                required: true,
                pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              placeholder="Email"
            />
            {errors.email && (
              <span className={css.error}>Format email is wrong</span>
            )}

            <input
              className={css.input}
              {...register("password", {
                required: true,
              })}
              placeholder="Password"
            />
            {errors.password && (
              <span className={css.error}>Format email is wrong</span>
            )}
          </div>

          <Button className={css.button} type="submit">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}
