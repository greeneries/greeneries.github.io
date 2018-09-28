import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Directive, Input, ViewChild } from '@angular/core';
/*
 <item status="true" *ngIf="isShow==true"></item> 의 값을
 directive의 selector인 item 을 참조해서 그린다.
화면이 다 그리진 후에 그 값을 참조해서 item을 setting한다.
그렇게 하기 위해서 @ViewChild라고 선언함.

 @ViewChild(Item)
 set item(d: Item) {
   console.log('@ViewChild(Item) set item(item: Item) called.');
     setTimeout(() => { this.status = d.status; }, 0);
 }


 */
@Directive({
  selector: 'item'
})
export class Item {
  @Input() status: boolean;
}

/*

 app-view-child의 selector에서
 <item-component (click)="display()"></item-component>
 같이 선언하면 item-component의  template를 가져다가 쓴다..

 */
@Component({
  selector: 'item-component',
  template: `<button>알림창</button>
  <input type="text" value="111" #target>
  <button (click)="show($event, target.value)">show</button>
  <button (click)="show2($event)">show2</button>`
})
export class ItemComponent {
  display(str: string) {
    alert('ItemComponent # display() : str = ' + str);
  }

  show(e, value){
    alert('hi : '+ value);
    e.stopPropagation(); // 부모가 걸린 click event는 작동시키지 마라
  }

/*
부모 Component와 자식 Component가 데이터를 공유하는게 아니라
부모 Component가 직접 자식 Component 객체를 제어하는 방식입니다.
 */
  @ViewChild('target') x;
  show2(e){
    console.log(this.x);
    alert('show2 : ' + this.x.nativeElement.value);
    e.stopPropagation(); // 부모가 걸린 Click Event는 작동시키지 마라
  }
}

@Component({
  selector: 'app-view-child',
  // templateUrl: './view-child.component.html',
  template: `
 <item status="true" *ngIf="isShow==true"></item>
 <item status="false" *ngIf="isShow==false"></item>
 <button (click)="toggle()">toggle</button><br>
 isShow : {{isShow}}<br>
 status : {{status}}<br>
 <fieldset>
 <item-component (click)="display()"></item-component>
 </fieldset>`,
  styleUrls: ['./view-child.component.css']
})


export class ViewChildComponent implements OnInit {
  status: boolean;

  // 처음 실행할 때 isShow: boolean = true; 이므로
  // <item status="true" *ngIf="isShow==true"></item> 가 선택된다.
  // 따라서 item 디렉티브의 status 값은 true 로 초기에 설정된다.
  // 토글 함수가 호출되면 isShow 값이 반전된다.
  isShow: boolean = true;

  // @ViewChild(접근할 컴포넌트의 클래스명)
  // @ViewChild 데코레이터를 사용해서 디렉티브인 Item 자원에 접근한다.
  @ViewChild(Item)
  set item(d: Item) {
    console.log('@ViewChild(Item) set item(item: Item) called.');
    // 디렉티브의 객체는 화면이 초기화되고 나서야 접근할 수 있기 때문에
    // setTimeout 함수를 사용하여 코드수행을 늦춘다.
    setTimeout(() => { this.status = d.status; }, 0);
  }

  @ViewChild(ItemComponent) itemComponent: ItemComponent;

  constructor() { }

  ngOnInit() {
    console.log('ViewChildComponent # ngOnInit()');
  }

  toggle() {
    alert('ViewChildComponent # toggle().');
    this.isShow = !this.isShow;
  }

  display() {
    alert('ViewChildComponent # display().');
    this.itemComponent.display('sended message from ViewChildComponent');
  }
}
