import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { login } from "../../redux/users/operations";
import { closeModalLogin } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import css from "../LogInForm/LogInForm.module.css";

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
    // dispatch(login(data));
    // console.log(data);
    reset();
    dispatch(closeModalLogin());
    navigate("/nannies");
  };

  return (
    <Modal modalClose={closeModalLogin()}>
      <h2 className={css.title}>Log In</h2>
      <p className={css.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>

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
    </Modal>
  );
}
