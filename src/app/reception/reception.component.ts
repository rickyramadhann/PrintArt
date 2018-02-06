import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../_animations/animation';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
	selector: 'app-reception',
	templateUrl: './reception.component.html',
	styleUrls: ['./reception.component.css'],
	animations: [fadeInAnimation],

	// attach the fade in animation to the host (root) element of this component
	host: { '[@fadeInAnimation]': '' }
})


export class ReceptionComponent implements OnInit {
	public courses
	constructor(public route:ActivatedRoute,) { 
		this.getdata();
		
	}

	ngOnInit() {

		
	}

	getdata(){
		this.courses = [
		{id:"Angular 4", name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, pariatur? Doloribus porro incidunt, dolorem quidem, officia perferendis voluptate recusandae aperiam, molestias ut eos, tenetur debitis neque quod ea et odio!"},
		{id:"Bootstrap 4", name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero eius necessitatibus sit dolore. Repellat placeat accusantium nihil possimus saepe aperiam quis incidunt atque, minima nam eligendi mollitia porro accusamus."},
		{id:"Laravel 5.4", name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga totam ad quae architecto perferendis laboriosam obcaecati perspiciatis dolor est explicabo deserunt vel in, repellat iste tempora! Possimus voluptas, ullam delectus."},
		{id:"Accurate", name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis neque quaerat at doloribus, molestiae qui voluptates repudiandae laudantium est similique nihil voluptas odit id, ducimus minima porro architecto cupiditate expedita!"},
		]
	}

}
