import { Routes } from '@angular/router';
import { AuthGuard } from '../-guards/auth.guard';
import { AddcomplaintComponent }    from '../reception/addcomplaint/addcomplaint.component';
import { AddorderComponent } from '../reception/addorder/addorder.component';
import { AddinvoiceComponent } from '../reception/addinvoice/addinvoice.component';
import { ReceptionComponent }from './reception.component';

// Route Configuration
export const receptionRoutes: Routes = [
{ path: 'reception', component: ReceptionComponent },
{ path: 'reception/'+'addorder', component: AddorderComponent },
{ path: 'reception/'+'addcomplaint', component: AddcomplaintComponent},
{ path: 'reception/'+'addinvoice', component: AddinvoiceComponent},
];