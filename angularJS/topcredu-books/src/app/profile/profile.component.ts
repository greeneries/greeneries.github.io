import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
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
    this.profileService.getProfile(sessionStorage.getItem('currentUser')).then(data => {
      this.profile.id = data.id;
      this.profile.name = data.name;
      this.profile.email = data.email;
      this.profile.gender = data.gender;
    });

  }


  updateForm(){
    this.router.navigate(['update-form']);
  }

}
