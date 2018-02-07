import { Routes } from '@angular/router';
import { AuthGuard } from '../-guards/auth.guard';
import { LowresComponent }    from './lowres.component';
import { LowresRipComponent }    from '../lowres/lowres-rip/lowres-rip.component';
import { LowresRipDetailComponent }    from '../lowres/lowres-rip-detail/lowres-rip-detail.component';

// Route Configuration
export const lowresRoutes: Routes = [
{ path: 'lowres', component: LowresComponent,canActivate: [AuthGuard] },
{ path: 'lowres/'+'lowres-rip', component: LowresRipComponent,canActivate: [AuthGuard] },
{ path: 'lowres/'+'lowres-rip-detail', component: LowresRipDetailComponent,canActivate: [AuthGuard]}
];