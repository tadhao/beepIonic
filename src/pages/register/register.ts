import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { LoginResponse } from '../../models/login/login.response';
import { User } from 'firebase/app';
import { DataServiceProvider } from '../../providers/data/data.service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private navCtrl: NavController, private navParams: NavParams, private toast: ToastController, private data: DataServiceProvider) {
  }

  register(event: LoginResponse){

    if(!event.error){

      this.toast.create({
        message: `Account created: ${event.result.email}`,
        duration: 3000
      }).present();
      this.data.getProfile(<User>event.result).subscribe(profile => {
        console.log(profile)
        profile.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfileFormPage');

      })

    }else {
      this.toast.create({
        message: "Account not created",
        duration: 3000
      }).present();
    }
  }





}
