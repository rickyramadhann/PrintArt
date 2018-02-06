import { Routes } from '@angular/router';
import { AuthGuard } from '../-guards/auth.guard';
import { UserComponent } from './user.component';
import { AdduserComponent } from './adduser/adduser.component';

// Route Configuration
export const userRoutes: Routes = [
{ path: 'user', component: UserComponent,  },
{ path: 'user/'+'adduser', component: AdduserComponent, },

];