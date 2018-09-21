import { Component, OnInit } from '@angular/core';
import { HelloService } from '../service/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle : string;

  constructor(private helloService: HelloService) { }
  ngOnInit() {
     this.homeTitle = this.helloService.getTitle();
  }

}
