import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditProfileFormComponent } from '../../components/edit-profile-form/edit-profile-form.component';

/**
 * Generated class for the EditProfileFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile-form',
  templateUrl: 'edit-profile-form.html',
})
export class EditProfileFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveProfileResults(event){
    event ? this.navCtrl.setRoot('TabsPage') : console.log("User not Authenticated!");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfileFormPage');
  }

}
