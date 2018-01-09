import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

	url = 'http://localhost:3000/users/register';

	constructor( private http: Http ) { 
	}

	register( userInfo ) {
		return this.http.post(this.url, { userInfo })
			.map(res => res.json())
	}

}
