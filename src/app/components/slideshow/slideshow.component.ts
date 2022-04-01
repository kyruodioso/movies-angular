import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input()
  movies!: Movie[];

  

  constructor(private _config:NgbCarouselConfig) { 
    _config.interval = 7000;
    _config.showNavigationIndicators=false;
  }

  ngOnInit(): void {
  }

}
