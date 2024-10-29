import { useForm } from "react-hook-form";
import Button from "./Button";

export default function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: true,
          pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
        })}
        placeholder="Email"
      />
      {errors.email && <span>Format email is wrong</span>}

      <input
        {...register("password", {
          required: true,
        })}
        placeholder="Password"
      />
      {errors.password && <span>Format email is wrong</span>}

      <Button type="submit">Log In</Button>
    </form>
  );
}
