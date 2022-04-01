import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/billboard-response';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public text: string = '';
  public movies: Movie[] = [];

  constructor(  private activatedRoute: ActivatedRoute,
                private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

     this.text=params["text"]      
      
     this.moviesService.searchMovie(params["text"]).subscribe(movies=>{
       this.movies=movies
    })

  })
  }
}
