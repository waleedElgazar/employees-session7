import {Injectable} from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

// const headerDict = {
//   headers: new HttpHeaders(
//     {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "*",
//       "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
//     }
//   )
// }

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  emplpoyees: Employee[] = []

  constructor(private http: HttpClient) {
  }

  fetchAllEmployee() {
    return this.http.get<Employee[]>
    ('http://localhost:8080/employee/fetchAll')
  }

  fetchEmployeeWithId(id: number) {
    // let httpRequest: { headers: HttpHeaders; method: string; body: {}; url: string } = {
    //   method: 'GET',
    //   body : {'id':1},
    //   url : 'http://localhost:8080/employee/fetchById\'',
    //   headers : new HttpHeaders(),
    // };
    // // @ts-ignore
    // this.http.request(httpRequest).subscribe(data=>{
    //   console.log(data)
    // });
    // console.log(id)
    // var op : HttpRequest<any>
    // op.body="r";
    // var options = {
    //
    //   params: new HttpParams().append('body',JSON.stringify({ 'id' :id}))
    // };
    // console.log(options)
    return this.http.get<Employee>
    ('http://localhost:8080/employee/fetchById/' + id)
  }

  fetchEmployeeWithStatus(status: string) {
    if (status == "BLOCKED") {
      return this.http.get<Employee[]>
      ('http://localhost:8080/employee/getEmployeeByStatus/BLOCKED')
    } else {
      return this.http.get<Employee[]>
      ('http://localhost:8080/employee/getEmployeeByStatus/UN_BLOCKED')
    }
  }

  changeStatus(employee: Employee): Observable<Employee> {
    console.log(employee)
    if (employee.status == "UN_BLOCKED") {
      return this.http.post<Employee>
      ('http://localhost:8080/employee/blockEmployee', employee)
    } else {
      return this.http.post<Employee>
      ('http://localhost:8080/employee/unBlockEmployee', employee)
    }
  }

  findEmployeeWithId(employees: Employee[], toSearch: string): number {
    console.log(employees)
    let x = employees.findIndex(
      emp => {
        emp.name === "toSearch"
      }
    )
    console.log("from find list " + x)
    return x;
  }

  findEmployee(employees: Employee[], name: string): number {
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].name == name) {
        console.log("index is",i)
        return i
      }
    }
    return -1;
  }
}
