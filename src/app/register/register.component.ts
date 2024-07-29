import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({

      name: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/)]],
      confirmpassword: ['', [Validators.required]]}, { validators: this.confirmPw });
  }

  // noSpaces(control: AbstractControl): ValidationErrors | null {
  //   let hasSpace = (control.value || '').includes(' ');
  //   return hasSpace ? { 'spaces': true } : null;
  // }

  confirmPw(control: AbstractControl): ValidationErrors | null {
    let password = control.get('password');
    let confirmpassword = control.get('confirmpassword');
    return password && confirmpassword && password.value !== confirmpassword.value ? { notMatch: true } : null;
  }
    // confirmPw(control: AbstractControl){
    //   return control.get('password')?.value === control.get('confirmpassword')?.value ? null : { notMatch: true};
    // }

  get name() {
    return this.userForm.get('name')
  }
  get username() {
    return this.userForm.get('username')
  }
  get email() {
    return this.userForm.get('email')
  }
  get password() {
    return this.userForm.get('password')
  }
  get confirmpassword() {
    return this.userForm.get('confirmpassword')
  }

  submit() {
    console.log(this.userForm);
    if(this.userForm.valid){

    }
  }

}
