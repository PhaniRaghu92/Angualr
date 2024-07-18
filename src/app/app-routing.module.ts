import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routing/home/home.component';
import { AboutComponent } from './components/routing/about/about.component';
import { ContactComponent } from './components/routing/contact/contact.component';

//step 1 define you r compontes in the routes array below
//step 2 use the path variable in the navigation
//step 3 define router-outlet ( will tell you where exactry the requested route content to be displayed)
//step 4 add RouterLink atrribute

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'phani',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
