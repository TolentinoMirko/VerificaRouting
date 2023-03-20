import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-details-serie-tv',
  templateUrl: './details-serie-tv.component.html',
  styleUrls: ['./details-serie-tv.component.css']
})
export class DetailsSerieTvComponent {
  routeObs!:Observable<ParamMap>;
  show:any;
  SerieServiceObs!:Observable<Object>;

constructor(private route:ActivatedRoute,private service:SerieService){}

ngOnInIt():void{
  this.routeObs = this.route.paramMap;
  this.routeObs.subscribe(this.getRouterParam);
}

  getRouterParam=(params:ParamMap)=>{
    let serieId = params.get('id');
    console.log(serieId)


    if(serieId!=null){
      this.SerieServiceObs=this.service.getSerie(serieId);
      this.SerieServiceObs.subscribe((data)=>{this.show=data;console.log(this.show)})
  }
  
  }
}

