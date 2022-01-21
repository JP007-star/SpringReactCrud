import React, { Component } from 'react';
import EmployeeService from "../services/EmployeeService"

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       employees:[]
    }
  }
  componentDidMount(){
    EmployeeService.getEmployees().then((res)=>{
      this.setState({employees:res.data})
    });
  }
  render() {
    return (
      <div>
          <h1 className='text-center'>List of Employee</h1>
          <div className='row'>
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Action</th>   
                </tr>
                
              </thead>
              <tbody>
                {
                  this.state.employees.map(
                    employee =>
                    <tr key={employee.id}>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.emailId}</td>
                      <td></td>

                    </tr>
                  )
                }
              </tbody>

            </table>

          </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;

