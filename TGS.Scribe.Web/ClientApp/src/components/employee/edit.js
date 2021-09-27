import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { employeeSchema } from '../schemas/employee';
import { employeeService } from "../services/employeeService";

export const EmployeeEdit = (props) => {
  const [employeeId] = useState(props.match.params.id);
  const history = useHistory();

  const resolver = yupResolver(employeeSchema);
  const { formState: { errors }, handleSubmit, register, reset } = useForm({
    resolver: resolver,
    criteriaMode: 'all'
  });

  useEffect(() => {
    const data = employeeService.getById(employeeId);
    reset(data);
  }, [employeeId, reset]);

  const onSubmit = (formData, e) => {
    debugger;
    console.log(formData, e);
  }

  const onError = (errors, e) => {
    console.log(errors, e);
  }

  const onCancel = (e) => {
    e.preventDefault();
    history.goBack();
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off" className="w-75">
      <div>
        <div className="w-50 d-inline-block">Employee Number:</div>
        <span>{employeeId}</span>
        <input name="employeeNumber"
          type="hidden" {
            ...register('employeeNumber')
          }
        />
      </div>
      <br />
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
          ...register('email',)
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
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary mr-2" type="submit">Save</button>
        <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}