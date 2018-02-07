import { Component, OnInit,ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMultiSelectOption,IMultiSelectSettings,IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-adduser',
	templateUrl: './adduser.component.html',
	styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
	public divisiadmin: any[];
	public divisioperator: any[];
	public user;
	public divisi;
	public aksi:any[]=[];
	public divisi_admin:any[]=[];
	public divisi_operator:any[]=[];
	public cbxDivisi:any[]=[];
	public radiobtn
	public register ={
		username:'',
		password:'',
		divisi:[],
		jenis_user:'',
	}
	public arraksi:any[]=[];
	public jenis_user:any[]=[]
	public isChecked:boolean = false;
	public aksis:any[]=[];
	public cbxAksi:any[]=[];
	public aktifitas:any[]=[];
	public checkall
	constructor(public http:HttpClient) { 
		this.user=JSON.parse(localStorage.getItem('currentUser'))
		this.jenis_user=[
		{id:1, name:'administrator'},
		{id:2, name:'operator'},
		]
		this.aktifitas=[
		{id:1, name:'tambah'},
		{id:2, name:'edit'},
		{id:3, name:'hapus'},
		]
	}

	ngOnInit() {
		this.http.get('http://192.168.100.204/api/public/get_divisi').subscribe(data=>{
			this.divisi=data;
			for(let i =0; i<this.divisi.length;i++){
				if(this.divisi[i].otoritas_id ==1){
					this.divisi_admin.push(this.divisi[i])
				}
				else{
					this.divisi_operator.push(this.divisi[i]);
				}
			}

			for(let i =0; i<this.divisi_admin.length;i++){
				this.aksi.push({id:this.divisi_admin[i].id,name:this.divisi_admin[i].name, value:this.aktifitas});				
			}

			console.log(this.aksi);
		})
	}

	clickadmin(){
		this.cbxDivisi =[]
		this.register.divisi = [];
		this.register.jenis_user = '1';
	}
	clickoperator(){
		this.cbxDivisi =[]
		this.register.jenis_user = '2';	
	}
	doCheck($event) {
		this.isChecked = !this.isChecked;
	}

	
	goregister(){
		console.log(this.register);
		this.http.post('http://192.168.100.204/api/auth/register',this.register).subscribe(response=>{
			console.log('res:', response)

		},error=> {
			console.log('error')
		});


	}

	datachanged(e:any, i){
		if(e.srcElement.checked ==true){
			this.cbxDivisi = [];	
			this.cbxDivisi.push(i);
			this.cbxAksi = [];
			this.merge();
		}

		else{
			let tmp = this.cbxDivisi.indexOf(i)
			this.cbxDivisi.splice(tmp, 1);
			let tmp2 = this.register.divisi.indexOf(i)
			this.register.divisi.splice(tmp2,i)

		}

	}

	aksichanged(e:any, x,i){
		if(e.srcElement.checked ==true){
			this.cbxAksi.push(x)

		}
		else{
			let tmp = this.cbxAksi.indexOf(x)
			this.cbxAksi.splice(tmp, 1)
		}


	}

	merge(){
		this.register.divisi.push({id:this.cbxDivisi,value:this.cbxAksi});
	}


	datachangedoperator(e:any, i){
		if(this.cbxDivisi.push.length==1){
			this.cbxDivisi = [];
			this.cbxAksi =[];
			this.register.divisi = [];
			this.cbxDivisi.push(i);
			this.register.divisi = this.cbxDivisi
		}

		console.log(this.cbxDivisi);

	}



}
