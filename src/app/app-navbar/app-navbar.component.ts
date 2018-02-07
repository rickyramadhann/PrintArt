import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
	selector: 'app-app-navbar',
	templateUrl: './app-navbar.component.html',
	styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
	
	public isCollapsed = true;
	public isCollapsed2 = true;
	public token
	constructor(public router:Router) { 
		
	}

	ngOnInit() {
	}

	logout(){
		localStorage.removeItem('currentUser');
		localStorage.removeItem('token');
		localStorage.removeItem('id');
		localStorage.removeItem('username');
		localStorage.setItem('statuslogin', 'false')
		this.router.navigate(['login'])
	}

}
