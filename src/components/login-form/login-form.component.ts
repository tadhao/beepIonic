import { Component, EventEmitter, Output} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';
import { ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login.response';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;

  account= {} as Account;

  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, private tostCtrl: ToastController,
     private auth: AuthServiceProvider) {
       this.loginStatus= new EventEmitter<LoginResponse>();
     }

 /* navigateToPage(pageName: string){
      pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
     }
*/
     async login(){
try{
      const result = await this.auth.signInWithEmailAndPassword(this.account);
      this.loginStatus.emit(result);
    }
    catch(e){
      console.error(e.message);
      this.loginStatus.emit(e);

    }


   /*   try{
      const result : LoginResponse = {
        result: await this.afAuth.auth
      .signInWithEmailAndPassword(this.account.email, this.account.password)
      };

      this.loginStatus.emit(result);
      }
      catch(e){
        console.error(e.message);

        const error: LoginResponse= {
            error: e
        }

        this.loginStatus.emit(error);
      }
      */
    }

    navigateToRegisterPage(){
      this.navCtrl.push('RegisterPage');
    }


}
