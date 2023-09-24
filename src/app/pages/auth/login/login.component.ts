import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user:any = {}

  constructor(private authenticationService:AuthenticationService){}

  ngOnInit(){

  }

  onSubmit(){
    this.authenticationService
      .login(this.user.email,this.user.password)
      .then((response:any)=>{
        console.log(response)
      })
  }

  ngOnDestroy(){

  }

}
