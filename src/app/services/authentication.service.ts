// auth.service.ts

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .catch(err => {
      console.log('Something went wrong:',err.message);
      alert("Your credentials are incorrect")
    });
  }

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }
}
