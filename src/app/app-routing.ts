import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceptionComponent } from './reception/reception.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
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
import { AuthGuard } from './-guards/auth.guard';

import {lowresRoutes} from './lowres/lowres.router'
import {userRoutes} from './user/user.router'


const routes:Routes=[

{path: '', component: IndexComponent, canActivate: [AuthGuard] },
{path:'login', component: LoginComponent },
{path:'index', component:IndexComponent, canActivate: [AuthGuard]},
{path:'receptionist', component:ReceptionComponent,canActivate: [AuthGuard]},
{path:'designer', component:DesignerComponent, canActivate: [AuthGuard]},
...lowresRoutes,
...userRoutes,


{path:'highres', component:HighresComponent, canActivate: [AuthGuard]},
{path:'laser', component:LaserComponent, canActivate: [AuthGuard]},
{path:'offset', component:OffsetComponent, canActivate: [AuthGuard]},
{path:'delivery', component:DeliveryComponent, canActivate: [AuthGuard]},
{path:'user', component:UserComponent, canActivate: [AuthGuard]},
{ path: '**', redirectTo: '' }

]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [IndexComponent, ReceptionComponent, DesignerComponent,LowresComponent,LowresRipComponent,HighresComponent,LaserComponent,OffsetComponent,DeliveryComponent, UserComponent];