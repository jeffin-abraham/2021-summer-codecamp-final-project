import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MainViewComponent } from './main-view/main-view.component'
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'todolist', component: MainViewComponent },
  { path: 'signup', component: SignUpComponent },
   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
