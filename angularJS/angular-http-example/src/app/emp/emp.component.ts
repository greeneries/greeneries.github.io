import { Component, OnInit } from '@angular/core';

@Component({ selector: 'app-emp', templateUrl: './emp.component.html', styleUrls: ['./emp.component.css'] }) export class EmpComponent implements OnInit {
  employees: any = [{ id: 1, firstName: 'AA', lastName: 'aa' },
                    { id: 2, firstName: 'BB', lastName: 'bb' },
                    { id: 3, firstName: 'CC', lastName: 'cc' },
                    { id: 4, firstName: 'DD', lastName: 'dd' }
                  ];

  constructor() { }

  ngOnInit() { }

  getEmps() { }

  addEmp(firstName: string, lastName: string) { alert('addEmp() # ' + firstName + ' ' + lastName); }

  removeEmp(person: any) {
    alert(JSON.stringify(person)); return false; // anchor 태그의 이벤트 전파를 막는다.   }

    onSubmit(f) {

      if (f.valid) { var emp = f.value; console.log(emp); alert('onSubmit() # ' + emp.firstName + ' ' + emp.lastName); }
    }
  }
