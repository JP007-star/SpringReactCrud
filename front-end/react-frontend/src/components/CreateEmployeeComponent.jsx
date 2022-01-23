import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class CreateEmployeeComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          firstName :'',
          lastName :'',
          emailId :''
         
      }
      this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
      this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
      this.changeEmailHandler=this.changeEmailHandler.bind(this);
    }
    saveEmployee=(e)=>{
        e.preventDefault();
        let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        console.log('employee =>'+JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res =>{
           this.props.history.push("/employees")
        });
    }
    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value})
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value})
    }
    changeEmailHandler=(event)=>{
        this.setState({emailId:event.target.value})
    }
    
    cancel(){
        this.props.history.push('/employees')
    }
    
    render() {
        return (
            <div className='container m-3'>
                <div className='row'>
                    <div className='card  col-md-6 offset-md-3 offset-md-3'>
                        <h3>Add Employee</h3>
                        <form >
                          <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name"
                             value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName"  placeholder="Last Name" 
                              value={this.state.lastName} onChange={this.changeLastNameHandler} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="emailId">Email Id</label>
                            <input type="text" className="form-control" id="emailId" name="emailId"  placeholder="Last Name" 
                              value={this.state.emailId} onChange={this.changeEmailHandler}/>
                          </div>
                          <button className="btn btn-success  m-3" onClick={this.saveEmployee} >Save</button>
                          <button className='btn btn-danger m-3' onClick={this.cancel.bind(this)} > Cancel</button>
                        </form>
                        
                       
                        
                
                    </div>
                </div> 
            </div>
        );
    }
}

export default CreateEmployeeComponent;