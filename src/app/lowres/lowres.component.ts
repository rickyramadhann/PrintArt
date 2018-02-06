import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lowres',
	templateUrl: './lowres.component.html',
	styleUrls: ['./lowres.component.css']
})
export class LowresComponent implements OnInit {
	public id
	constructor() {
		this.id=2;
	}

	ngOnInit() {
	}

}
