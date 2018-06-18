import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ComponentsModule } from '../components.module';
import { Profile } from '../../models/profile/profile';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from 'firebase/app';
import { DataServiceProvider } from '../../providers/data/data.service';
import { Subscription } from 'rxjs/Subscription';
/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy{

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  text: string;
  profile= {} as Profile;

  @Output() saveProfileResults: EventEmitter<Boolean>;

  constructor(private auth: AuthServiceProvider, private data: DataServiceProvider) {

    this.saveProfileResults= new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.auth.getAuthenticateUser().subscribe((user: User) => {
      this.authenticatedUser = user;
  })
  }
  async saveInfo(){
    if(this.authenticatedUser){
     this.profile.email= this.authenticatedUser.email;
    const result = await this.data.saveTheProfile(this.authenticatedUser, this.profile);
    this.saveProfileResults.emit(result);
  }
}

ngOnDestroy():void{
  this.authenticatedUser$.unsubscribe();
}

}
