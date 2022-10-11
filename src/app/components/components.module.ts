import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';




@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesGridComponent,
    CastSlideShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    PipesModule,
    
  ],
  exports:[
    NavbarComponent,
    SlideshowComponent,
    MoviesGridComponent,
    NgbModule,
    CastSlideShowComponent
  ]
})
export class ComponentsModule { }
