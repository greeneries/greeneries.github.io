import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
// import { User } from '../../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {id:'', name:'', email:'' , gender:''};

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    console.log('ProfileComponent - currentUser: ',sessionStorage.getItem('currentUser'));
    this.profileService.getProfile(sessionStorage.getItem('currentUser')).then(data => {
      this.profile.id = data.id;
      this.profile.name = data.name;
      this.profile.email = data.email;
      this.profile.gender = data.gender;

      console.log(data);
    });

  }


  // ngOnInit() {
  //   this.bookService.list().then(data => {
  //     this.books = data;
  //     console.log(data)
  //   });
  // }


  // updateForm(){
  //   this.router.navigate(['update-form']);
  // }

}
