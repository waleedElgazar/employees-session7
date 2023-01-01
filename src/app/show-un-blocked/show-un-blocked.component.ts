import { Component } from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-show-un-blocked',
  templateUrl: './show-un-blocked.component.html',
  styleUrls: ['./show-un-blocked.component.css']
})
export class ShowUnBlockedComponent {
  status='UN_BLOCKED'
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
