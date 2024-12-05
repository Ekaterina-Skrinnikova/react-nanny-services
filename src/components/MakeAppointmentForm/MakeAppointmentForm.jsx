import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import css from "../RegistrationForm/RegistrationForm.module.css";
import sprite from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/users/operations";
import { closeModalMakeAppointment } from "../../redux/modal/slice";

export default function MakeAppointmentForm() {
  // const isOpenModal = useSelector(selectIsOpenModal);
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
    console.log("data", data);
    console.log("data-JSON", JSON.stringify(data));
    reset();
    dispatch(closeModalMakeAppointment());
  };

  const handleCloseMakeAppointment = () => {
    dispatch(closeModalMakeAppointment());
  };
  return (
    <div className={css.backdrop}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Make an appointment with a babysitter</h2>
        <p className={css.text}>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
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

        <button className={css.btnClose} onClick={handleCloseMakeAppointment}>
          <svg className={css.iconClose}>
            <use href={`${sprite}#icon-x`}></use>
          </svg>
        </button>

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
      </div>
    </div>
  );
}
