import { PiPassword } from "react-icons/pi";
import * as yup from "yup";

export const schemaForMakeAppointment = yup.object().shape({
  address: yup
    .string()
    .max(30, "Max 30 symbols")
    .required("Address is required"),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, "Format phone is wrong (+380XXXXXXXXX)")
    .required("Phone is required"),
  childAge: yup
    .number()
    .min(1, "Min age 1")
    .max(18, "Max age 18")
    .required("Age is required"),
  timeMeeting: yup.string().required("Meeting time is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  fatherOrMatherName: yup.string().required("Name is required"),
  comment: yup.string().notRequired(),
});

export const schemaRegistretion = yup.object().shape({
  name: yup
    .string()
    .min(3, "Min 3 letters")
    .max(9, "Max 9 letters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
});
