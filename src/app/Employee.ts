export class Employee {
  id: number
  name: string;
  department: string;
  status: string;
  statusDescription: string;
  salary: number;

  constructor(id: number, name: string, dep: string, status: string, statusDescription: string, salary: number) {
    this.department = dep;
    this.id = id;
    this.name = name;
    this.status = status;
    this.statusDescription = statusDescription;
    this.salary = salary;
  }
}
