import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { userModel } from './user-dashboard.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {

  formValue !: FormGroup;
  userModelObject: userModel = new userModel()
  api: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
    })
  }
  postUserDetails(){
    this.userModelObject.primeiroNome = this.formValue.value.primeiroNome;
    this.userModelObject.sobreNome = this.formValue.value.sobreNome;
    this.userModelObject.email = this.formValue.value.email;

    this.api.postUser(this.userModelObject)
    .subscribe((res: any)=>{
      console.log(res);
      alert('Usuário cadastrado com sucesso')
      this.formValue.reset()
    },
      (    err: any)=>{
      alert('ALGO DEU ERRADO!!!')
    })
  }

}
