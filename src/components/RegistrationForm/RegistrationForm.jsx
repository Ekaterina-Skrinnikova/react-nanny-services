import { useForm } from "react-hook-form";
import Button from "../Button/Button";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { maxLength: 10 })} placeholder="Name" />
        {errors.name && <span>The name more then 10</span>}

        <input
          {...register("email", {
            required: true,
            pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          placeholder="Email"
        />
        {errors.email && <span>Email is wrong</span>}

        <input
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && <span>Enter the password</span>}

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
