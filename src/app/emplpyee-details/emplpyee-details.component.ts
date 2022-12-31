import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-emplpyee-details',
  templateUrl: './emplpyee-details.component.html',
  styleUrls: ['./emplpyee-details.component.css']
})
export class EmplpyeeDetailsComponent implements OnInit {
  employee: Employee

  constructor(private employeeService: EmployeeServiceService) {
  }

  ngOnInit(): void {
    this.employeeService.fetchEmployeeWithId().subscribe(
      data=>{
        this.employee=data
      }
    )
  }

}
