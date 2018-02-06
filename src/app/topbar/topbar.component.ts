import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$(document).ready(function () {
			$('#sidebarCollapse').on('click', function () {
				$('#sidebar').toggleClass('active');
				$('#content').toggleClass('active-content');
			});
		});
		var w = window.innerWidth;
		if(w<=992 && w>=769){
			$('#sidebar').toggleClass('active');
			$('#content').toggleClass('active-content');
		}

		$('#submit').click(function() {
			if ($('#submit').val() == '0'){
				$('#search').css("width", "calc(100% - 200px)");
				$('#search').css("padding-left", "10px");
				$('#submit').val('1');
				$('#navbar-left').addClass('hidden-cust');
			}
			else{
				$('#search').css("width", "0");
				$('#search').css("padding-left", "0");
				$('#submit').val('0');
				$('#navbar-left').removeClass('hidden-cust');;
			}
		});
	}

}
