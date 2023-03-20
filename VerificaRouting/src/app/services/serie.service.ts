import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http:HttpClient) { }

  SearchSerie(query:string){
    const url = `https://api.tvmaze.com/search/shows?q=${query}`
    let obsSerie = this.http.get(url);
    return obsSerie;
  }

  getSerie(id:string){
    const url= `https://api.tvmaze.com/shows/${id}`;
    return this.http.get(url)
  }

}
