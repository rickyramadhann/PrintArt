import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceptionComponent } from './reception/reception.component';
import { AddcomplaintComponent }    from './reception/addcomplaint/addcomplaint.component';
import { AddorderComponent }    from './reception/addorder/addorder.component';
import { AddinvoiceComponent }    from './reception/addinvoice/addinvoice.component';


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
import {receptionRoutes} from './reception/reception.router'


const routes:Routes=[

{path: '', component: IndexComponent,},
{path:'login', component: LoginComponent },
{path:'index', component:IndexComponent, },
{path:'designer', component:DesignerComponent, },
...receptionRoutes,
...lowresRoutes,
...userRoutes,


{path:'highres', component:HighresComponent, },
{path:'laser', component:LaserComponent, },
{path:'offset', component:OffsetComponent, },
{path:'delivery', component:DeliveryComponent, },
{path:'user', component:UserComponent, },
{ path: '**', redirectTo: '' }

]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [IndexComponent, ReceptionComponent, DesignerComponent,LowresComponent,LowresRipComponent,HighresComponent,LaserComponent,OffsetComponent,DeliveryComponent, UserComponent];


//  