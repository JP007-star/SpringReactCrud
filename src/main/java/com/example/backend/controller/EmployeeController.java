/*
 * @project SpringBoot-backend
 * @fileName EmployeeController
 * @author Jaya Prasad.M --> jaya_muthukrishnan
 * @email jaya_muthukrishnan@thbs.com
 * @date 15 01 2022 11:30 PM
 */
package com.example.backend.controller;

import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
@CrossOrigin(origins = "http://192.168.1.3:3000/")
@RestController
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }
    @RequestMapping("/addEmployee")
    public ResponseEntity<?> addEmployee(HttpServletRequest request){
        String firstName=request.getParameter("firstName");
        String lastName=request.getParameter("lastName");;
        String emailId=request.getParameter("emailId");;
        Employee employee=new Employee(firstName,lastName,emailId);
        employeeRepository.save(employee);
        return ResponseEntity.ok(HttpStatus.CREATED);
    }
}
