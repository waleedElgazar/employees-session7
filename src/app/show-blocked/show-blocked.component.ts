import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from "../employee-service.service";
import {Employee} from "../Employee";

@Component({
  selector: 'app-show-blocked',
  templateUrl: './show-blocked.component.html',
  styleUrls: ['./show-blocked.component.css']
})
export class ShowBlockedComponent implements OnInit{
  status='BLOCKED'
  employees:Employee[]=[]
  constructor(private employeeService:EmployeeServiceService) {
  }
  ngOnInit(): void {
    this.employeeService.fetchEmployeeWithStatus(this.status).subscribe(Response => {
        this.employees = Response.map(
          emp => (
            new Employee(emp.id, emp.name, emp.department, emp.status, emp.statusDescription, emp.salary)
          )
        )
      }
    )
  }
  changeEmployeeStatus(name:string){
    let idx=this.employeeService.findEmployee(this.employees,name)
    console.log("index ",idx)
    let emp=this.employees[idx];
    console.log("object",emp)
    this.employeeService.changeStatus(emp).subscribe(
      data=>{
        this.employees[idx]=data
        console.log(data)
      }
    )
  }

}
