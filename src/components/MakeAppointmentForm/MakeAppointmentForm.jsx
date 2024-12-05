import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { registration } from "../../redux/users/operations";
import { closeModalMakeAppointment } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";
import css from "../RegistrationForm/RegistrationForm.module.css";

export default function MakeAppointmentForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    valuesDefault: {
      address: "",
      phone: "",
      childAge: "",
      date: "",
      email: "",
      fatherOrMatherName: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(registration(data));
    reset();
    dispatch(closeModalMakeAppointment());
  };

  return (
    <Modal modalClose={closeModalMakeAppointment()}>
      <h2 className={css.title}>Make an appointment with a babysitter</h2>
      <p className={css.text}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>

      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p>Your nanny</p>
          <p>NAME</p>
        </div>
      </div>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <div>
            <input className={css.input} />
            {errors.email && (
              <span className={css.error}>Format email is wrong</span>
            )}
            <input className={css.input} />
            {errors.email && (
              <span className={css.error}>Format email is wrong</span>
            )}
          </div>

          <div>
            <input className={css.input} />
            {errors.email && (
              <span className={css.error}>Format email is wrong</span>
            )}
            <input className={css.input} />
            {errors.email && (
              <span className={css.error}>Format email is wrong</span>
            )}
          </div>

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
          Send
        </Button>
      </form>
    </Modal>
  );
}
