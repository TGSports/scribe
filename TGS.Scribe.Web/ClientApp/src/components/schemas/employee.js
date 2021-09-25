import * as Yup from 'yup';

export const employeeSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .max(50, "Must be 50 characters or less"),
  lastName: Yup.string()
    .required('Last Name is required')
    .max(50, "Must be 50 characters or less"),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required')
    .max(100, "Must be 100 characters or less"),
  employeeNumber: Yup.string()
    .required('Employee number is required')
    .max(20, "Must be 20 characters or less"),
  isActive: Yup.boolean()
    .optional()
});