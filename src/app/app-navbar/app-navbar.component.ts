import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-app-navbar',
	templateUrl: './app-navbar.component.html',
	styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
	public menu;
	public isCollapsed = false;
	public isCollapsed2 = false;
	constructor() { 
		this.menu=[
		{id:1},
		{id:2},
		{id:3},
		{id:4},
		]
	}

	ngOnInit() {
	}

}
