import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsSerieTvComponent } from './details-serie-tv/details-serie-tv.component';
import { SearchSerieTvComponent } from './search-serie-tv/search-serie-tv.component';

const routes: Routes = [
    {path : 'search',component : SearchSerieTvComponent},
    {path : 'details',component : DetailsSerieTvComponent},
    { path: '',   redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
