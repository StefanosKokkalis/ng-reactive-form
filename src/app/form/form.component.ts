import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //METHOD1: USAGE OF FORMGROUP, FORMCONTROL
  // user:FormGroup;

  // constructor() { }

  // ngOnInit(): void {
  //   this.user = new FormGroup({
  //     name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //     account: new FormGroup({
  //       email: new FormControl('', Validators.required),
  //       confirm: new FormControl('', Validators.required)
  //     })
  //   })
  // }

  // onSubmit({ value, valid }: { value: User, valid: boolean }) {
  //   console.log(this.user.value, this.user.valid);
  // }

  //METHOD2: USAGE OF FORMGROUP,FORMBUILDER
  user: FormGroup;
  City: any = ['Athens', 'Patra', 'Thessaloniki'];
  constructor( private fb: FormBuilder ){}

  ngOnInit():void {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      cityName: ['', Validators.required],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    })
  }

  changeCity(e) {
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get cityName() {
    return this.user.get('cityName');
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
