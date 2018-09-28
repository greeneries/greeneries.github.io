import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books : Book[] = [];

  constructor(private listService: ListService) { }

 // 페이지 로드되자마자 실행 ngOnInit
  ngOnInit() {
    this.listService.get().then(data =>{
      console.log(data);
      this.books = data;
    }).catch(error => {
      console.log('ListComponent getList error');
    });
  }

  // 쓸모 없는 짓을 했구나..
  getList(){
    // this.listService.get().then(data =>{
    //   console.log(data);
    //
    // }).catch(error => {
    //   console.log('ListComponent getList error');
    // });
  }


}


// {
//   "users":[
//     {"id":"user", "pw":"111"},
//     {"id":"admin", "pw":"222"}
//   ]
// }
