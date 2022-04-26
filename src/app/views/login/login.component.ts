import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;

  constructor(private loginService: LoginService, private  router: Router, private formBuilder: FormBuilder) { 


    this.formLogin = this.formBuilder.group({
      email: ['email@email.com', [Validators.email, Validators.required]],
      senha: ['',[Validators. required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
  }

  loginModel = new User("","");
  mensagem = ""
  logar(){
    this.loginService.login(this.loginModel).subscribe((response)=>{
      this.router.navigateByUrl('')

      },(respostaErro)=>{
        this.mensagem = respostaErro.error
        console.log(this.mensagem)
    
    })
  }
}
  
