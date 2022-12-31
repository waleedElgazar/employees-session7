import {Injectable} from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

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

  fetchAllEmployee(){
    return this.http.get<Employee[]>
    ('http://localhost:8080/employee/fetchAll')
  }

  fetchEmployeeWithId(){
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
    ('http://localhost:8080/employee/fetchById/1')
  }
}
