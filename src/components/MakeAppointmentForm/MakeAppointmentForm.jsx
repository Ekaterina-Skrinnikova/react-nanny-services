import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { registration } from "../../redux/users/operations";
import { closeModalMakeAppointment } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";
import css from "../MakeAppointmentForm/MakeAppointmentForm.module.css";

export default function MakeAppointmentForm({ nanny }) {
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
    <Modal modalClose={closeModalMakeAppointment()} className={css.width}>
      <h2 className={css.title}>Make an appointment with a babysitter</h2>
      <p className={css.text}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>

      <div className={css.block}>
        <img className={css.photo} src={nanny.avatar_url} alt="nanny`s photo" />

        <div>
          <p className={css.yourNanny}>Your nanny</p>
          <p className={css.name}>{nanny.name}</p>
        </div>
      </div>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <div className={css.blockInput}>
            <input
              className={css.input}
              placeholder="Address"
              {...register("address", { required: true, maxLength: 30 })}
            />
            {errors.email && (
              <span className={css.error}>Format email is wrong</span>
            )}
            <input className={css.input} type="tel" placeholder="+380" />
            {errors.email && (
              <span className={css.error}>Format email is wrong</span>
            )}
          </div>

          <div className={css.blockInput}>
            <input
              className={css.input}
              type="number"
              placeholder="Child's age"
            />
            {errors.email && (
              <span className={css.error}>Format email is wrong</span>
            )}
            <input className={css.input} type="time" />
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
            {...register("name", {
              required: true,
            })}
            placeholder="Father's or mother's name"
          />
          {errors.password && (
            <span className={css.error}>Format email is wrong</span>
          )}

          <textarea
            className={css.textarea}
            {...register("comment", {
              required: false,
            })}
            placeholder="Comment"
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
