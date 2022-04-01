import { Component, Input, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import{Router} from '@angular/router'

import { Movie } from 'src/app/interfaces/billboard-response';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {

  @Input() 
  movies: Movie[]=[];

  constructor(_config:NgbRatingConfig,private router:Router) { 
    _config.max=10;
    _config.readonly = true;
  }

  ngOnInit(): void {
  }

  movieClick(movie:Movie){
     console.log(movie)
     this.router.navigate(['/movie',movie.id])
  }

}
