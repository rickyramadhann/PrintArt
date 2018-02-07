import { Routes } from '@angular/router';
import { AuthGuard } from '../-guards/auth.guard';
import { AddcomplaintComponent }    from '../reception/addcomplaint/addcomplaint.component';
import { AddorderComponent } from '../reception/addorder/addorder.component';
import { AddinvoiceComponent } from '../reception/addinvoice/addinvoice.component';
import { ReceptionComponent }from './reception.component';

// Route Configuration
export const receptionRoutes: Routes = [
{ path: 'reception', component: ReceptionComponent,canActivate: [AuthGuard] },
{ path: 'reception/'+'addorder', component: AddorderComponent,canActivate: [AuthGuard] },
{ path: 'reception/'+'addcomplaint', component: AddcomplaintComponent,canActivate: [AuthGuard]},
{ path: 'reception/'+'addinvoice', component: AddinvoiceComponent,canActivate: [AuthGuard]},
];