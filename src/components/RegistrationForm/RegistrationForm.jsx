import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import css from "../RegistrationForm/RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../redux/users/operations";
import { closeModalReg, setShowPassword } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegistretion } from "../../utils/schemas";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { selectShowPassword } from "../../redux/modal/selectors";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaRegistretion),
    valuesDefault: { name: "", email: "", password: "" },
  });

  const showPassword = useSelector(selectShowPassword);

  const onSubmit = (data) => {
    dispatch(registration(data));
    reset();
    dispatch(closeModalReg());
  };

  return (
    <Modal modalClose={closeModalReg()}>
      <h2 className={css.title}>Registration</h2>
      <p className={css.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <input
            className={css.input}
            {...register("name")}
            placeholder="Name"
          />
          {errors.name && (
            <span className={css.error}>{errors.name.message}</span>
          )}

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
          Sign Up
        </Button>
      </form>
    </Modal>
  );
}
