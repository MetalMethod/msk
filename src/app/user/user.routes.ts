import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

export const userRoutes = [
    { path: 'user/profile',  component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'user/login',  component: LoginComponent }
]