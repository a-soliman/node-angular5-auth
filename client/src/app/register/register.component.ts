import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	post: any;
	description: string = '';
	name: string = '';

	constructor( private fb: FormBuilder, 
				 private registerService: RegisterService ) {

		this.registerForm = fb.group({
			'name': [ null, Validators.compose([ Validators.required, Validators.minLength(2), Validators.maxLength(12)])],
			'description': [ null, Validators.compose([ Validators.required, Validators.minLength(4)])]
		})
	}

	ngOnInit() {
	}

	register( userInfo ) {
		this.name = userInfo.name;
		this.description = userInfo.description;

		this.registerService.register(userInfo)
			.subscribe((res) => {
				console.log(res);
			});

		this.registerForm.reset();
	}

}
