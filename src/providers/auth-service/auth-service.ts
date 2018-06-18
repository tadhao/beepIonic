//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularFire2/auth';
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login.response';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(private auth: AngularFireAuth) {
    console.log('Hello AuthServiceProvider Provider');
  }

getAuthenticateUser(){
  return this.auth.authState;
}

async createUserWithEmailAndPassword(account: Account){
  try{
    return<LoginResponse>{
      result: await this.auth.auth
    .createUserWithEmailAndPassword(account.email, account.password)
    };
    }
    catch(e){
      console.error(e.message);
      return<LoginResponse>{
        error: e
      }
    }
}


  async signInWithEmailAndPassword(account: Account){
    try{
    return<LoginResponse>{
      result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
    };
    }catch(e){
      return<LoginResponse>{
        error: e
      }
    }
  }

}
