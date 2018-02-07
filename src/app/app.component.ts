import { Component } from '@angular/core';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {transition,trigger,query,style,animate,group,animateChild} from '@angular/animations';
import * as $ from 'jquery';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	private statuslogin
	constructor(private loadingSpinner:Ng4LoadingSpinnerService) { 
		if(localStorage.getItem('token')){
			this.statuslogin = true;
		}
		else{
			this.statuslogin = false;
		}
		console.log(this.statuslogin)

	}

	ngOnInit() {
		$(document).ready(function () {
			$('#sidebarCollapse').on('click', function () {
				$('#sidebar').toggleClass('active');
				$('#content').toggleClass('active-content');
			});
		});

		if(localStorage.getItem('token')){
			this.statuslogin = true;
		}
		else{
			this.statuslogin = false;
		}
		console.log(this.statuslogin)
	}

	logout(){
		localStorage.removeItem('currentUser');
		localStorage.removeItem('token');
		localStorage.removeItem('id');
		localStorage.removeItem('username');
		localStorage.setItem('statuslogin', 'false')
		this.statuslogin = false;
	}

}
