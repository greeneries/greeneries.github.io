import { Component, OnInit } from '@angular/core';
import { MemoHttpService } from './memo-http.service';
import { Memo } from './memo.model';
//import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  memos: any = [    {id:1, writer:'Tom', content:'Be happy', date:'20180921'}];
  errorMessage: string;


  constructor(private memoHttpService: MemoHttpService) { }

  ngOnInit() {
    this.getMemos();
  }

  getMemos() {

    this.memoHttpService.getMemos()
        .subscribe(
          emps => this.memos = emps, // 성공 콜백
          error => this.memos = <any>error); // 실패 콜백
  }

  removeMemo(memo: any) {
    alert(JSON.stringify(memo));

    let id = memo.id;


    this.memoHttpService.removeMemo(memo)
        .subscribe( // 성공 콜백
          noResponse => {
            let targetIndex = this.memos
                .findIndex(emp => memo.id === id);
            this.memos.splice(targetIndex, 1);
          },
          error => this.errorMessage = <any>error); // 실패 콜백
    return false;
    // preventDefault
    // stopPropagation
  }

  onSubmit(f) {
    if (f.valid) {
      var memo = f.value;
      console.log(memo);

      alert('onSubmit() # ' + memo.id + ' ' + memo.writer + ' ' + memo.content + ' ' + memo.date);


      this.memoHttpService.addMemo(memo.id, memo.writer, memo.content, memo.date)
          .subscribe(
            res => { // 성공 콜백
              this.memos.push({
                id: res.id,
                writer: memo.writer,
                content: memo.content,
                date : memo.date
              });
            },
            error => this.errorMessage = <any>error); // 실패 콜백
    }
  }



}
