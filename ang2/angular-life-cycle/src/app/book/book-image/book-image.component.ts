import { Component, OnInit, Input, Output, EventEmitter }
  from '@angular/core';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent implements OnInit {
  // @Input() data-bound input property
  @Input() path = "./assets/image/img001.jpg";
  @Input() title = "제목";
  @Input() width = "100";
  @Input() height = "150";

  // Custom Event(@Output + EventEmitter)를 통한 자식 -> 부모 데이터 전달
  /*
      @Output
    - 하위 컴포넌트의 값을 상위 컴포넌트에서 전달 받기 위한 요소 정의
    - 이벤트를 통해 반환
    - 따라서 비 동기 호출 방식
    - 값이 전달될 때까지 기다리는 것이 아니라, 이벤트가 일어나 값이 전달되면 그때 그에 맞는 일을 처리
    - 이벤트 일으키기 위해 EventEmitter 사용
   */
  @Output() selectBook1 = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(name: string) {
    this.selectBook1.emit(name);
  }
}
