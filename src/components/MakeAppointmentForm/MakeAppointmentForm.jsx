import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { closeModalMakeAppointment } from "../../redux/modal/slice";
import Modal from "../Modal/Modal";
import css from "../MakeAppointmentForm/MakeAppointmentForm.module.css";
import InputTimePiker from "../InputTimePiker/InputTimePiker";
import { selectSavedNanny } from "../../redux/nannies/selectors";
import { schemaForMakeAppointment } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

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
    resolver: yupResolver(schemaForMakeAppointment),
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

  const timeOptions = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];

  const onSubmit = (data) => {
    console.log(data);
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
                {...register("address")}
              />
              {errors.address && (
                <span className={css.error}>{errors.address.message}</span>
              )}
            </div>

            <div className={css.insideBlock}>
              <input
                className={css.input}
                type="tel"
                placeholder="+380"
                {...register("phone")}
              />
              {errors.phone && (
                <span className={css.error}>{errors.phone.message}</span>
              )}
            </div>
          </div>

          <div className={css.blockInput}>
            <>
              <input
                className={css.input}
                type="number"
                placeholder="Child's age"
                {...register("childAge")}
              />
              {errors.childAge && (
                <span className={css.error}>{errors.childAge.message}</span>
              )}
            </>
            <Controller
              name="timeMeeting"
              control={control}
              defaultValue="09:00"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <>
                  <InputTimePiker
                    options={timeOptions}
                    value={value}
                    onChange={onChange}
                  />
                  {error && <span>{error.message}</span>}
                </>
              )}
            />
          </div>

          <div>
            <input
              className={css.input}
              {...register("email")}
              placeholder="Email"
            />
            {errors.email && (
              <span className={css.error}>{errors.email.message}</span>
            )}
          </div>

          <div>
            <input
              className={css.input}
              {...register("fatherOrMatherName")}
              placeholder="Father's or mother's name"
            />
            {errors.fatherOrMatherName && (
              <span className={css.error}>
                {errors.fatherOrMatherName.message}
              </span>
            )}
          </div>

          <textarea
            className={css.textarea}
            {...register("comment")}
            placeholder="Comment"
          />
          {errors.comment && (
            <span className={css.error}>{errors.comment.message}</span>
          )}
        </div>

        <Button className={css.button} type="submit">
          Send
        </Button>
      </form>
    </Modal>
  );
}
