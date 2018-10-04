import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
// import { User } from '../../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string = '';
  user = {id:'', name:'', email:'' , gender:''};

  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    this.profileService.getProfile(sessionStorage.getItem('currentUser')).then(data => {
      this.user.id = data.id;
      this.user.name = data.name;
      this.user.email = data.email;
      this.user.gender = data.gender;

      console.log(data);
    });

  }


}
