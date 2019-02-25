import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateComponent } from './date/date.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewComponent } from './view/view/view.component';
import { BlogTileComponent } from './blog-tile/blog-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DateComponent
  },
  {
    path: 'contact',
    component: AddressCardComponent
  },
  {
    path: 'search',
    component: ViewComponent
  },
  {
    path: 'blog',
    component: BlogListComponent
  },
  {
    path: '**',
    component: HelloWorldComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
