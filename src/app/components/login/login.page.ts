import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string="";
  password:string="";

  constructor(
    private auth:AuthService,
    private router:Router,
    ) { }

  ngOnInit() {
  }
  OnSubmitLogin(){
    this.auth.login(this.email,this.password).then(res=>{
      this.router.navigate(['./home'])
    }).catch(err=> alert("Correo o Contraseña inválidos. Intentalo nuevamente"))
  }
  GoRegister(){
    this.router.navigate(['./register'])
  }
}
