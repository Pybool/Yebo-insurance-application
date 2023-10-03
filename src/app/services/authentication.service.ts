// auth.service.ts

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
interface Iuser{
  email:string;
  password:string;
  phoneNumber:string
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }

  register(user:Iuser) {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .catch(err => {
      console.log('Something went wrong:',err.message);
      alert(err.message)
    });
  }

  logout() {
    return this.afAuth.signOut();
  }
}
