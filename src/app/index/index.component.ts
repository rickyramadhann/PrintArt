import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartComponent } from '../chart/chart.component';
@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	@ViewChild(ChartComponent) chartComponent: ChartComponent;
	public type
	public data
	public options
	constructor() {
	}

	ngOnInit(){
		this.type = 'bar';
		this.data = {
			labels: ['HR', 'LR', 'LS', 'LSBW', 'OFFSETGTO', 'OFFSETSM', 'OFFSETX', 'PLAT', 'SHR'],
			datasets: [
			{
				label: 'My First dataset',
				data: [500, 1000, 1200, 1700, 2400, 2600, 2800,2000,1400],
				backgroundColor: ['rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255,235,59, 0.2)',
				'rgba(2,119,189 , 0.2)',
				'rgba(109,76,65 , 0.2)'],
				borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255,235,59, 1)',
				'rgba(2,119,189 , 1)',
				'rgba(109,76,65 , 1)'
				],
				borderWidth: 1
			},

			
			]
		};
		this.options = {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				xAxes: [
				{
					stacked: true
				}
				],
				yAxes: [
				{
					stacked: true
				}
				]
			}
		};
	}

	change() {
		this.type = 'bar';
		this.data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
			{
				label: 'My First dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
				backgroundColor: '#FF6384'
			},
			{
				label: 'My Second dataset',
				data: [10, 30, 20, 40, 60, 50, 70],
				backgroundColor: '#36A2EB'
			},
			{
				label: 'My Third dataset',
				data: [35, 59, 50, 61, 76, 46, 35],
				backgroundColor: '#FFCE56'
			}
			]
		};
	}
}