import * as React from 'react';
import { useForm } from "react-hook-form";

const defaultValues = {
  input: "",
  firstName: "",
  lastName: "",
  email: "",
  employeeNumber: "",
  isActive: false
};

export const AddEmployee = () => {
  const { formState: { errors }, handleSubmit, register } = useForm({ defaultValues: defaultValues, criteriaMode: 'all' });

  const onSubmit = (data, e) => {
    //const isValid = event.target.checkValidity();
    //this.setState({ displayErrors: !isValid });
    //if (!isValid) {
    //  // form is invalid! so we do nothing
    //  return;
    //}

    //const form = event.target;
    //const data = new FormData(form);
    //for (var [key, value] of data.entries()) {
    //  console.log(key, value);
    //}
    //alert('A name was submitted: ' + stringifyFormData(data));
    debugger;
    console.log(data, e);
  }

  const onError = (errors, e) => {
    debugger;
    console.log(errors, e);
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off" class="w-75">
      <label htmlFor="employeeNumber">Employee Number</label>
      <span class='hint'>Please enter a unique ID for this person.  This ID cannot be changed afterwards.</span>
      <input id="employeeNumber"
        type="text"
        class="w-100"
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
          <span class="error" role="alert">{errors.employeeNumber.message}</span>
        )}
      </p>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName"
        type="text"
        class="w-100"
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
          <span class="error" role="alert">{errors.firstName.message}</span>
        )}
      </p>

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName"
        type="text"
        class="w-100"
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
          <span class="error" role="alert">{errors.lastName.message}</span>
        )}
      </p>

      <label htmlFor="email">Email</label>
      <input id="email"
        type="text"
        class="w-100"
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
          <span class="error" role="alert">{errors.email.message}</span>
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