import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import css from "../RegistrationForm/RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/users/operations";
import { closeModalReg } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ valuesDefault: { name: "", email: "", password: "" } });

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
    </Modal>
  );
}
