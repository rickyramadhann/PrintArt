import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
	selector: 'app-lowres-rip',
	templateUrl: './lowres-rip.component.html',
	styleUrls: ['./lowres-rip.component.css']
})
export class LowresRipComponent implements OnInit {
	public id	
	constructor(public router:Router) { 
		this.id = 2;
	}

	ngOnInit() {
	}
	gotodetail(){
		console.log('diklik')
		this.router.navigate(['lowres','lowres-rip-detail'],{ queryParams: { id: this.id}})
	}
}
