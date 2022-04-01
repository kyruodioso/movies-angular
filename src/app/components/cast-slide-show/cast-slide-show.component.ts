import { Component, Input, OnInit , AfterViewInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import Swiper from 'swiper';



@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.scss']
})
export class CastSlideShowComponent implements OnInit , AfterViewInit  {
  @Input()
  cast: Cast[]=[] ;
  

  constructor(private activatedRoute:ActivatedRoute,
              private moviesService:MoviesService,
            ) { 
     
              }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

      const swiper = new Swiper('.swiper', {
        slidesPerView: 5.3,
        freeMode: true,
        spaceBetween: 10
      });
    }

}
