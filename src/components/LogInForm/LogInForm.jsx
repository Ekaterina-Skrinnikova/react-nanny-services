import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import css from "../LogInForm/LogInForm.module.css";
import sprite from "../../images/sprite.svg";

export default function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Log In</h2>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>
        <button className={css.btnClose}>
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
