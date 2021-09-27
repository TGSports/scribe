import { fetchWrapper } from './fetchWrapper';

export const employeeService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

const baseUrl = `/users`;

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id) {
  return {
    firstName: "foo",
    lastName: "bar",
    employeeNumber: id,
    email: "foo@bar.com"
  };
  //return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
  return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}