import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
	selector: 'app-lowres-rip-detail',
	templateUrl: './lowres-rip-detail.component.html',
	styleUrls: ['./lowres-rip-detail.component.css']
})
export class LowresRipDetailComponent implements OnInit {
	public id
	constructor(private activatedRoute: ActivatedRoute) { 
		this.activatedRoute.queryParams.subscribe(params=>{
			this.id = params['id'] 
		})
	}

	ngOnInit() {
	}

}
