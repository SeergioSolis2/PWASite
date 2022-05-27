import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { RegisterComponent } from './register/register.component';
import { VideoComponent } from './video/video.component';
import { CrossoversComponent } from './crossovers/crossovers.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'heroe/:id', component: UnheroeComponent},
  {path: 'video', component: VideoComponent},
  {path: 'buscador/:nombreh', component: SearchComponent},
  {path: 'crossovers', component: CrossoversComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
