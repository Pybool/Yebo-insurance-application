import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

interface Iuser{
  email:string;
  password:string;
  phoneNumber:string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public areaCode:string = '+234';
  public user:any = {email:'',password:'',phoneNumber:''}
  public passwordAgain = ''
  public passwordMismatch = false
  public termsConditionsAgreed:any = false
  activateButton:any = false;
  showAlert:Boolean = false;
  alertMessage: string = '';
  alertDuration: number = 5000; // 5 seconds
  alertBackgroundColor: string = '#ffc107'; // Alert yellow color

  constructor(private authenticationService: AuthenticationService){}

  ngOninit(){

  }

  onSubmit(){
    if(this.user.password !== this.passwordAgain){
      this.alertMessage = "Paswords do not match"
      this.alertDuration = 3000; // 5 seconds
      this.alertBackgroundColor = '#423f3f' //'rgb(225 31 64)';
      return this.passwordMismatch = true
    }
    return this.authenticationService
      .register(this.user)
      .then((response:any)=>{
        console.log(response)
        if(response){
          response.user.sendEmailVerification()
          this.alertMessage = response?.message || 'Something has gone wrong'
          this.alertDuration = 3000; // 5 seconds
          this.alertBackgroundColor = '#423f3f' //'rgb(225 31 64)';
        }
        else{
          alert('No response from server')
        }
        
      })
  }

  requiredErrors(field:string){
    if (field=='passwordagain'){
      return this.passwordAgain.length < 0
    }
    try{
      if(this.user[field].length == 0){
        return true;
      }
      return false;
    }
    catch(err){return false}
  }

  checkForActivation(){
    this.activateSubmission()
  }

  setTermsConditionsAgreed(){
    this.termsConditionsAgreed = !this.termsConditionsAgreed
    this.checkForActivation()
  }

  activateSubmission(){
    this.activateButton =  (this.user.email.length > 0) && (this.user.password.length>=4) && (this.user.password == this.passwordAgain) &&  this.termsConditionsAgreed

  }

  ngOnDestroy(){}

}
