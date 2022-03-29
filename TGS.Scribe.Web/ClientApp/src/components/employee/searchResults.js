import * as React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { employeeSchema } from '../schemas/employee';

export const EmployeeSearchResults = () => {
  const resolver = yupResolver(employeeSchema);
  const { formState: { errors }, handleSubmit, register } = useForm({
    resolver: resolver,
    criteriaMode: 'all'
  });

  const onSubmit = (formData, e) => {
    console.log(formData, e);
  }

  const onError = (errors, e) => {
    console.log(errors, e);
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off" className="w-75">
      <label htmlFor="employeeNumber">Employee Number</label>
      <span className='hint'>Please enter a unique ID for this person.  This ID cannot be changed afterwards.</span>
      <input name="employeeNumber"
        type="text"
        className="w-100"
        aria-invalid={errors.employeeNumber ? "true" : "false"}
        {
          ...register('employeeNumber')
        }
      />
      <p>
        {errors.employeeNumber && (
          <span className="error" role="alert">{errors.employeeNumber.message}</span>
        )}
      </p>

      <label htmlFor="firstName">First Name</label>
      <input name="firstName"
        type="text"
        className="w-100"
        aria-invalid={errors.firstName ? "true" : "false"}
        {
          ...register('firstName')
        }
      />
      <p>
        {errors.firstName && (
          <span className="error" role="alert">{errors.firstName.message}</span>
        )}
      </p>

      <label htmlFor="lastName">Last Name</label>
      <input name="lastName"
        type="text"
        className="w-100"
        aria-invalid={errors.lastName ? "true" : "false"}
        {
        ...register('lastName')
        }
      />
      <p>
        {errors.lastName && (
          <span className="error" role="alert">{errors.lastName.message}</span>
        )}
      </p>

      <label htmlFor="email">Email</label>
      <input name="email"
        type="text"
        className="w-100"
        aria-invalid={errors.email ? "true" : "false"}
        {
          ...register('email')
        }
      />
      <p>
        {errors.email && (
          <span className="error" role="alert">{errors.email.message}</span>
        )}
      </p>

      <label htmlFor="isActive">Is Active</label>
      <input name="isActive"
        type="checkbox"
        {
          ...register('isActive')
        }
      />

      <br />

      <button className="btn btn-primary" type="submit">Save</button>

    </form>
  );
}