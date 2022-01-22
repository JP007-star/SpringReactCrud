import React, { Component } from 'react';
import EmployeeService from "../services/EmployeeService"
import {Link} from 'react-router-dom'




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
          <h6 className='text-center'>List of Employee</h6>
          <div className='row'>
          <Link to="/addEmployee"><button className='btn btn-primary float-end m-3'>Add Employee</button></Link>
          </div>
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
                      <td key={employee.id}>{employee.firstName}</td>
                      <td key={employee.id}>{employee.lastName}</td>
                      <td key={employee.id}>{employee.emailId}</td>
                      <td key={employee.id}>
                        <button key={employee.id} className='btn btn-primary m-3'><i className='fa fa-edit'></i></button>

                        <button key={employee.id} className='btn btn-danger'><i className='fa fa-trash'></i></button>
                      </td>

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

