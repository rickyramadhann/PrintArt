import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
	selector: 'app-addinvoice',
	templateUrl: './addinvoice.component.html',
	styleUrls: ['./addinvoice.component.css']
})
export class AddinvoiceComponent implements OnInit {
	public repeatorder
	public punyadesain
	constructor() { 

	}

	ngOnInit() {
	}

	jenisorder() {
		this.repeatorder ='tidak'
	}
	jenisorder2() {
		this.repeatorder ='repeat'
	}
	newdesign() {
		this.punyadesain='tidak'	
	}
	jenisdesign() {
		this.punyadesain='punya'	
	}

}
