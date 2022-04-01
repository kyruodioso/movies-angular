import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';
import { BillboardResponse, Movie } from '../interfaces/billboard-response';
import { MovieResponse } from '../interfaces/movie-response';
import { CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  private url:string='https://api.themoviedb.org/3'
  private billboardPage=1;
  loading:boolean=false

  get params(){
    return{
      api_key:'e2a010fd777ea9882d2b92c348665d25',
      language:'es-ES',
      page:this.billboardPage
    }
  }


  getBillboard():Observable<Movie[]>{
    if(this.loading){
      return of([]);
    }
    this.loading=true;
   return this.http.get<BillboardResponse>(`${this.url }/movie/now_playing`,{
     params:this.params
   }).pipe(
     map((res)=>res.results),
     tap(()=>{
       this.billboardPage += 1;
       this.loading=false;
     })
   )
  }

  resetBillboardPage(){
    this.billboardPage = 1
  }

  searchMovie(text:string):Observable<Movie[]>{
    const params = {...this.params, page: '1', query: text };

    return this.http.get<BillboardResponse>(`${ this.url }/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results )
    )
  }

  getMovieDetail(id:string){
    return this.http.get<MovieResponse>(`${this.url}/movie/${id}`,{
      params:this.params
    }).pipe(
      catchError(err=>of(null))
    )
  }

  getCast(id:string){
    return this.http.get<CreditsResponse>(`${this.url}/movie/${id}/credits`,{
      params:this.params
    }).pipe(
      map(res=>res.cast),
      catchError(err=>of(null))
    )
  }
  
}
