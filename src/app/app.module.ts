import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ExpandableListModule } from 'angular2-expandable-list';
import { ChartModule } from 'angular2-chartjs';


// used to create fake backend
import { fakeBackendProvider } from './-helpers/fake-backend';
import { AuthGuard } from './-guards/auth.guard';
import { JwtInterceptor } from './-helpers/jwt.interceptor';
import { AuthenticationService } from './-services/authentication.service';
import { UserService } from './-services/user.service';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ReceptionComponent } from './reception/reception.component';
import { IndexComponent } from './index/index.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DesignerComponent } from './designer/designer.component';
import { LowresComponent } from './lowres/lowres.component';
import { HighresComponent } from './highres/highres.component';
import { LaserComponent } from './laser/laser.component';
import { OffsetComponent } from './offset/offset.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { LowresRipComponent } from './lowres/lowres-rip/lowres-rip.component';
import { LowresRipDetailComponent } from './lowres/lowres-rip-detail/lowres-rip-detail.component';
import { LowresOperatorComponent } from './lowres-operator/lowres-operator.component';
import { LowresOperatorDetailComponent } from './lowres-operator-detail/lowres-operator-detail.component';
import { LowresFinisherComponent } from './lowres-finisher/lowres-finisher.component';
import { LowresFinisherDetailComponent } from './lowres-finisher-detail/lowres-finisher-detail.component';
import { LowresDeliverComponent } from './lowres-deliver/lowres-deliver.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './user/adduser/adduser.component';


@NgModule({
	declarations: [
	AppComponent,
	AppNavbarComponent,
	ReceptionComponent,
	IndexComponent,
	routingComponents,
	TopbarComponent,
	DesignerComponent,
	LowresComponent,
	HighresComponent,
	LaserComponent,
	OffsetComponent,
	DeliveryComponent,
	LowresRipComponent,
	LowresRipDetailComponent,
	LowresOperatorComponent,
	LowresOperatorDetailComponent,
	LowresFinisherComponent,
	LowresFinisherDetailComponent,
	LowresDeliverComponent,
	LoginComponent,
	UserComponent,
	AdduserComponent,

	// DashboardComponent,
	// AlertComponent,
	
	],
	imports: [
	BrowserModule,AppRoutingModule,BrowserAnimationsModule,Ng4LoadingSpinnerModule.forRoot(),
	NgbModule.forRoot(),FormsModule,HttpClientModule,MultiselectDropdownModule,ExpandableListModule,ChartModule
	],
	providers: [
	AuthGuard,

	AuthenticationService,
	UserService,
	{
		provide: HTTP_INTERCEPTORS,
		useClass: JwtInterceptor,
		multi: true
	},

	fakeBackendProvider
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
