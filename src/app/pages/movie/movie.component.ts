import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits-response';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {


  public movie:MovieResponse | undefined
  public cast: Cast[] | undefined;

  constructor(private activatedroute:ActivatedRoute,
    private moviesService:MoviesService,
    private location:Location,
    private router:Router) { }

  ngOnInit(): void {
    const {id} =this.activatedroute.snapshot.params;
    combineLatest([

      this.moviesService.getMovieDetail( id ),
      this.moviesService.getCast( id )

    ]).subscribe( ( [movie, cast] ) => {
      
      if ( !movie ) {
        this.router.navigateByUrl('/');
        return;
      }
      if(cast == null){
        return
      }

      this.movie = movie;  
     this.cast = cast
     this.cast = cast.filter( actor => actor.profile_path !== null );
    });}

  backPage(){
this.location.back()
  }

}
