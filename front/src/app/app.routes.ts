import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { AuthGuard } from './login/authGuard';
import { PlaylistComponent } from './playlist/playlist.component';


export const routes: Routes = [
    { path: 'playlist', component: PlaylistComponent, canActivate: [AuthGuard] },
    { path: 'music', component: MusicComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path:'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}