import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';


import { EmployeeSearch } from './components/employee/search';
import { EmployeeAdd } from './components/employee/add';
import { EmployeeEdit } from './components/employee/edit';
import { EmployeeDetails } from './components/employee/details';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/admin' component={Counter} />
        <Route path='/service' component={FetchData} />
        <Route path='/employees' component={EmployeeSearch} />
        <Route path='/employees/add' component={EmployeeAdd} />
        <Route path='/employees/edit/:id' component={EmployeeEdit} />
        <Route path='/employees/details/:id' component={EmployeeDetails} />
      </Layout>
    );
  }
}
