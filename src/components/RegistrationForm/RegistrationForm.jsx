import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import css from "../RegistrationForm/RegistrationForm.module.css";
import sprite from "../../images/sprite.svg";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Registration</h2>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
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
              {...register("name", { maxLength: 10 })}
              placeholder="Name"
            />
            {errors.name && (
              <span className={css.error}>The name more then 10</span>
            )}

            <input
              className={css.input}
              {...register("email", {
                required: true,
                pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              placeholder="Email"
            />
            {errors.email && <span className={css.error}>Email is wrong</span>}

            <input
              className={css.input}
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && (
              <span className={css.error}>Enter the password</span>
            )}
          </div>

          <Button className={css.button} type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
