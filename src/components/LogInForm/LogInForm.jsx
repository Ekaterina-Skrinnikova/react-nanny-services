import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModalLogin } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import css from "../LogInForm/LogInForm.module.css";
import { login } from "../../redux/users/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../schemas";

export default function LogInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaLogin),
    valuesDefault: {
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
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && (
            <span className={css.error}>{errors.email.message}</span>
          )}

          <input
            className={css.input}
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && (
            <span className={css.error}>{errors.password.message}</span>
          )}
        </div>

        <Button className={css.button} type="submit">
          Log In
        </Button>
      </form>
    </Modal>
  );
}
