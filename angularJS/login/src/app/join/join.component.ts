import { Component, OnInit } from '@angular/core';
import { JoinService } from '../services/join.service';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  user = {id:'' , name: '', password: ''}

  constructor(private joinService: JoinService) { }

  ngOnInit() {
  }

  submitForm(){
    console.log('JoinComponent : submitForm() ', this.user);


  }

}
