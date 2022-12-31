import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  employees: Employee[] = []
  blockedEmployees: Employee[] = []
  unBlockedEmployee: Employee[] = []

  constructor(private employeeService: EmployeeServiceService) {
  }

  ngOnInit(): void {
    this.employeeService.fetchAllEmployee().subscribe(Response => {
      this.employees = Response.map(
        emp => (
         new Employee(emp.id,emp.name,emp.department,emp.status,emp.statusDescription,emp.salary)
        )
      )
    })
  }

}
