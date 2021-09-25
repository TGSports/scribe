import * as React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { employeeSchema } from '../schemas/employee';

export const EmployeeAdd = () => {
  const resolver = yupResolver(employeeSchema);
  const { formState: { errors }, handleSubmit, register } = useForm({
    resolver: resolver,
    criteriaMode: 'all'
  });

  const onSubmit = (data, e) => {
    console.log(data, e);
  }

  const onError = (errors, e) => {
    console.log(errors, e);
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off" className="w-75">
      <label htmlFor="employeeNumber">Employee Number</label>
      <span className='hint'>Please enter a unique ID for this person.  This ID cannot be changed afterwards.</span>
      <input id="employeeNumber"
        type="text"
        className="w-100"
        aria-invalid={errors.employeeNumber ? "true" : "false"}
        {
          ...register('employeeNumber', {
            required: 'This is required.',
            maxLength: {
              value: 20,
              message: "The maximum length is 20."
            }
          })
        }
      />
      <p>
        {errors.employeeNumber && (
          <span className="error" role="alert">{errors.employeeNumber.message}</span>
        )}
      </p>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName"
        type="text"
        className="w-100"
        aria-invalid={errors.firstName ? "true" : "false"}
        {
          ...register('firstName', {
            required: 'This is required.',
            maxLength: {
              value: 50,
              message: "The maximum length is 50."
            }
          })
        }
      />
      <p>
        {errors.firstName && (
          <span className="error" role="alert">{errors.firstName.message}</span>
        )}
      </p>

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName"
        type="text"
        className="w-100"
        aria-invalid={errors.lastName ? "true" : "false"}
        {
        ...register('lastName', {
          required: 'This is required.',
          maxLength: {
            value: 50,
            message: "The maximum length is 50."
          }
        })
        }
      />
      <p>
        {errors.lastName && (
          <span className="error" role="alert">{errors.lastName.message}</span>
        )}
      </p>

      <label htmlFor="email">Email</label>
      <input id="email"
        type="text"
        className="w-100"
        aria-invalid={errors.email ? "true" : "false"}
        {
          ...register('email', {
            required: 'This is required.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            },
            maxLength: {
              value: 100,
              message: "The maximum length is 100."
            }
          })
        }
      />
      <p>
        {errors.email && (
          <span className="error" role="alert">{errors.email.message}</span>
        )}
      </p>

      <label htmlFor="isActive">Is Active</label>
      <input id="isActive"
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