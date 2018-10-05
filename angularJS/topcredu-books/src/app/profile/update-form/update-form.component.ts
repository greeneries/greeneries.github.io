import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
//import { Profile } from '../../model/profile';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  profile = {id:'', name:'', email:'' , gender:'', pwd:''};
  errorMessage = '';

  ngOnInit() {
      this.profileService.getProfile(sessionStorage.getItem('currentUser')).then(data => {
      this.profile.id = data.id;
      this.profile.name = data.name;
      this.profile.email = data.email;
      this.profile.gender = data.gender;
    });
  }

  updateProfile(){
      this.profileService.updateProfile(this.profile);
  }

}
