import { useState } from 'react';
import { Link } from "react-router-dom"
import { employeeService } from '../services/employeeService';

export const EmployeeDetails = (props) => {
  const [employeeId] = useState(props.match.params.id);

  const data = employeeService.getById(employeeId);
  const labelClasses = "w-50 d-inline-block p-3";

  return (
    <div className="w-75">
      <div>
        <div className={labelClasses}>Employee Number</div>
        <span>{data.employeeNumber}</span>
      </div>

      <div>
        <div className={labelClasses}>First Name</div>
        <span>{data.firstName}</span>
      </div>

      <div>
        <div className={labelClasses}>Last Name</div>
        <span>{data.lastName}</span>
      </div>

      <div>
        <div className={labelClasses}>Email</div>
        <span>{data.email}</span>
      </div>

      <div>
        <div className={labelClasses}>Is Active</div>
        <span>{data.isActive ? 'Active' : 'Disabled'}</span>
      </div>

      <div>
      </div>
      <div className="d-flex justify-content-end">
        <Link to={`/employees/edit/${employeeId}`} className="btn btn-primary">Edit</Link>
      </div>
    </div>
  );
}