import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModalLogin, setShowPassword } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import css from "../LogInForm/LogInForm.module.css";
import { login } from "../../redux/users/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../schemas";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { selectShowPassword } from "../../redux/modal/selectors";
import { selectError } from "../../redux/users/selectors";
import Notice from "../Notice/Notice";

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

  const showPassword = useSelector(selectShowPassword);
  const error = useSelector(selectError);

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      reset();

      dispatch(closeModalLogin());
      navigate("/nannies");
    } catch (error) {
      console.log("Login error:", error);
    }
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

          <div className={css.wrapPassword}>
            <input
              type={showPassword ? "text" : "password"}
              className={css.inputPassword}
              {...register("password")}
              placeholder="Password"
            />
            <button
              className={css.btn}
              onClick={() => dispatch(setShowPassword())}
            >
              {showPassword ? (
                <FaRegEye size={20} />
              ) : (
                <FaRegEyeSlash size={20} />
              )}
            </button>
          </div>
          {errors.password && (
            <span className={css.error}>{errors.password.message}</span>
          )}
        </div>

        <Button className={css.button} type="submit">
          Log In
        </Button>
      </form>
      {error && <Notice>{error}</Notice>}
    </Modal>
  );
}
