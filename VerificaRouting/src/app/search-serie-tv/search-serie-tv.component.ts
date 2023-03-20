import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieService } from '../services/serie.service';


@Component({
  selector: 'app-search-serie-tv',
  templateUrl: './search-serie-tv.component.html',
  styleUrls: ['./search-serie-tv.component.css']
})
export class SearchSerieTvComponent {

  query!:string;
  obsSerie!:Observable<object>;
  results:any;

  constructor(public serie:SerieService){
  }
  submit(query:HTMLInputElement):void{
    if(!query.value){
      return;
    }
    this.query=query.value;
    this.obsSerie = this.serie.SearchSerie(this.query);
    this.obsSerie.subscribe((data)=>{this.results=data;console.log(this.results)})
  }

}
