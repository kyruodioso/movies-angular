import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './pages/movie/movie.component';



const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'movie/:id',
    component: MovieComponent
  },
  {
    path:'search/:text',
    component: SearchComponent
  },
  {
    path:'**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
