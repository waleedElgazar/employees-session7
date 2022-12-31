import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeServiceService} from "../employee-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-emplpyee-details',
  templateUrl: './emplpyee-details.component.html',
  styleUrls: ['./emplpyee-details.component.css']
})
export class EmplpyeeDetailsComponent implements OnInit {
  employee: Employee
  selectedId: number

  constructor(private employeeService: EmployeeServiceService,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedId = this.activatedRoute.snapshot.params["id"]
    console.log(this.selectedId)
    this.employeeService.fetchEmployeeWithId(this.selectedId).subscribe(
      data => {
        this.employee = data
      }
    )
  }

  changeEmployeeStatus(){
    this.employeeService.changeStatus(this.employee).subscribe(
    data=>{
      this.employee=data
      console.log(data)
    }
    )
  }
}
