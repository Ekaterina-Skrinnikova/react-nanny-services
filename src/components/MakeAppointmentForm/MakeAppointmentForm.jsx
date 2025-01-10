import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { registration } from "../../redux/users/operations";
import { closeModalMakeAppointment } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";
import css from "../MakeAppointmentForm/MakeAppointmentForm.module.css";
import InputTimePiker from "../InputTimePiker/InputTimePiker";
import { selectSavedNanny } from "../../redux/nannies/selectors";

export default function MakeAppointmentForm({ nanny }) {
  const dispatch = useDispatch();
  const savedNanny = useSelector(selectSavedNanny);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    valuesDefault: {
      address: "",
      phone: "",
      childAge: "",
      timeMeeting: "",
      email: "",
      fatherOrMatherName: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
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
        <img
          className={css.photo}
          src={savedNanny.avatar_url}
          alt="nanny`s photo"
        />

        <div>
          <p className={css.yourNanny}>Your nanny</p>
          <p className={css.name}>{savedNanny.name}</p>
        </div>
      </div>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrap}>
          <div className={css.blockInput}>
            <div className={css.insideBlock}>
              <input
                className={css.input}
                placeholder="Address"
                {...register("address", { required: true, maxLength: 30 })}
              />
              {errors.address && (
                <span className={css.error}>Format address is wrong</span>
              )}
            </div>

            <div className={css.insideBlock}>
              <input
                className={css.input}
                type="tel"
                placeholder="+380"
                {...register("tel", { required: true, maxLength: 30 })}
              />
              {errors.tel && (
                <span className={css.error}>Format phone is wrong</span>
              )}
            </div>
          </div>

          <div className={css.blockInput}>
            <div>
              <input
                className={css.input}
                type="number"
                placeholder="Child's age"
                {...register("number", { required: true, maxLength: 2 })}
              />
              {errors.number && (
                <span className={css.error}>Format number is wrong</span>
              )}
            </div>
            <Controller
              name="timeMeeting"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputTimePiker value={field.value} onCange={field.onChange} />
              )}
            />
            {/* <InputTimePiker /> */}
            {/* <input className={css.input} type="time" /> */}
          </div>

          <div>
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
          </div>

          <div>
            <input
              className={css.input}
              {...register("name", {
                required: true,
              })}
              placeholder="Father's or mother's name"
            />
            {errors.name && (
              <span className={css.error}>Format name is wrong</span>
            )}
          </div>

          <textarea
            className={css.textarea}
            {...register("comment", {
              required: false,
            })}
            placeholder="Comment"
          />
          {errors.comment && (
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
