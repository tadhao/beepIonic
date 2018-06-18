import { Component, OnInit } from '@angular/core';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DataServiceProvider } from '../../providers/data/data.service';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile';
import { Loading, LoadingController } from 'ionic-angular';



@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {

userProfile: Profile;
loader:Loading;

  ngOnInit(): void {
    this.loader.present();
   this.auth.getAuthenticateUser().subscribe((user: User)=>{
     this.data.getProfile(user).subscribe(profile=>{
      this.userProfile = <Profile> profile.val();
      this.loader.dismiss();
     })
   })
  }
  constructor(private loading: LoadingController, private auth: AuthServiceProvider, private data: DataServiceProvider) {
      this.loader=this.loading.create({
        content: "Loading Content..."
      })
  }

}
