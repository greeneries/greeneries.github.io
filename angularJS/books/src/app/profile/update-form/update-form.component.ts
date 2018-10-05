import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  user = {id:'', name:'', email:'' , gender:'', pwd:''};

  ngOnInit() {

    this.profileService.getProfile(sessionStorage.getItem('currentUser')).then(data => {
      this.user.id = data.id;
      this.user.name = data.name;
      this.user.email = data.email;
      this.user.gender = data.gender;

      console.log(data);
    });

  }

  updateProfile(){
    this.profileService.updateProfile(this.user);
  }
}
