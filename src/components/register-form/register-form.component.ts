import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/account/account.interface';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginResponse } from '../../models/login/login.response';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({

  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {



  account= {} as Account;
  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor( private auth: AuthServiceProvider) {
    this.registerStatus= new EventEmitter<LoginResponse>();
  }

  async register(){

   try{
    const result= await this.auth
    .createUserWithEmailAndPassword(this.account);
    this.registerStatus.emit(result);

    }
    catch(e){
      console.error(e.message);
      this.registerStatus.emit(e);

    }
  }

}
